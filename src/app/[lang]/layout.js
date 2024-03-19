import ApolloClientProvider from "../apolloProvider";
import "./globals.css";
// Sass
import "@/scss/main.scss";
// fonts
import "../../assets/fonts/stylesheet.css";
// Swiper
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import NavbarData from "@/components/common/NavbarData";
import SocialAction from "@/components/common/SocialAction";
import ScrollUp from "@/components/common/ScrollUp";
import Popup from "@/components/common/Popup";
import GsapSmoother from "@/components/common/GsapSmoother";
import SocialData from "@/components/common/SocialData";
import FooterData from "@/components/common/FooterData";
import { fetchData } from "@/data/fetchData";
import { POPUP_JOB_QUERY } from "@/graphql/recruitment/query";

export function generateViewport() {
  return {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
  }
}

// export async function generateStaticParams() {
//   return [{ lang: "en" }, { lang: "vi" }];
// }

export default async function RootLayout({ children, params }) {
  let lang = params.lang;
  const listJob = await fetchData(POPUP_JOB_QUERY,{language:lang?.toUpperCase()})
  return (
    <html lang={lang}>
      <body>
        <ApolloClientProvider>
          <NavbarData lang={lang} />
          <Popup
            listJob={listJob}
            lang={lang}
          />
          <SocialAction lang={lang} />
          <SocialData lang={lang} />
          <ScrollUp />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <GsapSmoother lang={lang}/>
              {children}
              <FooterData lang={lang} />
            </div>
          </div>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
