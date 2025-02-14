#!/bin/bash
set -e

# Generate .env if not exists
if [ ! -f .env ]; then
    echo "Generating .env file..."
    cat > .env <<EOF
APP_NAME=${APP_NAME:-Laravel}
APP_ENV=${APP_ENV:-production}
APP_KEY=
APP_DEBUG=${APP_DEBUG:-false}
APP_URL=${APP_URL:-http://localhost}

DB_CONNECTION=${DB_CONNECTION:-pgsql}
#DB_HOST=${DB_HOST:-postgres}
DB_PORT=${DB_PORT:-5432}
DB_DATABASE=${DB_DATABASE:-laravel}
DB_USERNAME=${DB_USERNAME:-laravel}
DB_PASSWORD=${DB_PASSWORD:-secret}
EOF

    # Generate APP_KEY
    php artisan key:generate --force
fi

# Run migrations
php artisan migrate

exec php-fpm
