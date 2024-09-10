FROM node:21-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app
# Copy the .npmrc file to use the credentials during the build process
COPY .npmrc .npmrc

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install gsap-bonus
COPY gsap-bonus.tgz .
# Omit --production flag for TypeScript devDependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY jsconfig.json .
COPY loader.js .
COPY i18n-config.js .
COPY tailwind.config.js .
COPY postcss.config.js .

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG NEXT_PUBLIC_API
ENV NEXT_PUBLIC_API=${NEXT_PUBLIC_API}
ARG NEXT_PUBLIC_REVALIDATE
ENV NEXT_PUBLIC_REVALIDATE=${NEXT_PUBLIC_REVALIDATE}
ARG DOMAIN
ENV DOMAIN=${DOMAIN}
ARG NEXT_PUBLIC_APIKEY
ENV NEXT_PUBLIC_APIKEY=${NEXT_PUBLIC_APIKEY}
ARG NEXT_PUBLIC_AUTHDOMAIN
ENV NEXT_PUBLIC_AUTHDOMAIN=${NEXT_PUBLIC_AUTHDOMAIN}
ARG NEXT_PUBLIC_PROJECTID
ENV NEXT_PUBLIC_PROJECTID=${NEXT_PUBLIC_PROJECTID}
ARG NEXT_PUBLIC_STORAGEBUCKET
ENV NEXT_PUBLIC_STORAGEBUCKET=${NEXT_PUBLIC_STORAGEBUCKET}
ARG NEXT_PUBLIC_MESSAGINGSENDERID
ENV NEXT_PUBLIC_MESSAGINGSENDERID=${NEXT_PUBLIC_MESSAGINGSENDERID}
ARG NEXT_PUBLIC_APPID
ENV NEXT_PUBLIC_APPID=${NEXT_PUBLIC_APPID}

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG NEXT_PUBLIC_API
ENV NEXT_PUBLIC_API=${NEXT_PUBLIC_API}
ARG NEXT_PUBLIC_REVALIDATE
ENV NEXT_PUBLIC_REVALIDATE=${NEXT_PUBLIC_REVALIDATE}
ARG DOMAIN
ENV DOMAIN=${DOMAIN}
ARG NEXT_PUBLIC_APIKEY
ENV NEXT_PUBLIC_APIKEY=${NEXT_PUBLIC_APIKEY}
ARG NEXT_PUBLIC_AUTHDOMAIN
ENV NEXT_PUBLIC_AUTHDOMAIN=${NEXT_PUBLIC_AUTHDOMAIN}
ARG NEXT_PUBLIC_PROJECTID
ENV NEXT_PUBLIC_PROJECTID=${NEXT_PUBLIC_PROJECTID}
ARG NEXT_PUBLIC_STORAGEBUCKET
ENV NEXT_PUBLIC_STORAGEBUCKET=${NEXT_PUBLIC_STORAGEBUCKET}
ARG NEXT_PUBLIC_MESSAGINGSENDERID
ENV NEXT_PUBLIC_MESSAGINGSENDERID=${NEXT_PUBLIC_MESSAGINGSENDERID}
ARG NEXT_PUBLIC_APPID
ENV NEXT_PUBLIC_APPID=${NEXT_PUBLIC_APPID}

# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]
