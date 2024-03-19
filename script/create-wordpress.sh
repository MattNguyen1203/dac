#!/bin/bash

# Update the apt package index
sudo apt update

# Install Nginx
sudo apt install -y nginx

# Allow Nginx through the firewall
sudo ufw allow 'Nginx Full'

# Reload the firewall
sudo ufw reload

# Test Nginx configuration
sudo nginx -t

# If the test is successful, restart Nginx
sudo systemctl restart nginx

# Install MySQL Server
sudo apt install -y mysql-server

# Secure MySQL installation
sudo mysql_secure_installation

# Install PHP and required extensions
sudo apt install -y php-fpm php-mysql

# Install Certbot and the Nginx plugin
sudo apt install -y certbot python3-certbot-nginx

# Configure Nginx for the domain cms.appjsc.com
sudo tee /etc/nginx/sites-available/cms.appjsc.com <<EOF
server {
    listen 80;
    server_name cms.appjsc.com;

    root /var/www/html/cms.appjsc.com;
    index index.php index.html index.htm;

    location / {
        try_files \$uri \$uri/ /index.php?\$args;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
EOF

# Create site enable
sudo ln -s /etc/nginx/sites-available/cms.appjsc.com /etc/nginx/sites-enabled/

# Test Nginx configuration again
sudo nginx -t

# If the test is successful, restart Nginx
sudo systemctl restart nginx

# Prompt Certbot to obtain and install SSL/TLS certificate for the domain appjsc.com
sudo certbot --nginx -d cms.appjsc.com

# Create the document root directory
sudo mkdir -p /var/www/html/cms.appjsc.com

# Set permissions
sudo chown -R www-data:www-data /var/www/html/cms.appjsc.com

# Download and extract WordPress
sudo curl -O https://wordpress.org/latest.tar.gz
sudo tar xf latest.tar.gz
sudo cp -r wordpress/* /var/www/html/cms.appjsc.com/

# Configure WordPress
sudo cp /var/www/html/cms.appjsc.com/wp-config-sample.php /var/www/html/cms.appjsc.com/wp-config.php
sudo chown www-data:www-data /var/www/html/cms.appjsc.com/wp-config.php

# Set permissions
chmod -R 777 /var/www/html/cms.appjsc.com

# Create MySQL database and user
DB_NAME="cms_appjsc_com"
DB_USER="cms_user"
DB_PASSWORD=$(openssl rand -base64 12)

# Modify wp-config.php
WP_CONFIG="/var/www/html/cms.appjsc.com/wp-config.php"

echo "" >> $WP_CONFIG
echo "/* FS settings for WordPress updates */" >> $WP_CONFIG
echo "define('FS_METHOD', 'direct');" >> $WP_CONFIG

# Generate secret keys for WordPress
sudo sed -i "s/database_name_here/$DB_NAME/g" $WP_CONFIG
sudo sed -i "s/username_here/$DB_USER/g" $WP_CONFIG
sudo sed -i "s/password_here/$DB_PASSWORD/g" $WP_CONFIG

# Create the database
sudo mysql -e "CREATE DATABASE $DB_NAME;"

# Create the database user and grant privileges
sudo mysql -e "CREATE USER '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASSWORD';"
sudo mysql -e "GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'localhost';"
sudo mysql -e "FLUSH PRIVILEGES;"

# Test Nginx configuration again
sudo nginx -t

# If the test is successful, restart Nginx
sudo systemctl restart nginx

# Display a message indicating successful installation
echo "LEMP stack (Nginx, MySQL, PHP), WordPress, and MySQL database have been successfully installed for the domain cms.appjsc.com."
echo "MySQL Database: $DB_NAME"
echo "MySQL User: $DB_USER"
echo "MySQL Password: $DB_PASSWORD"
