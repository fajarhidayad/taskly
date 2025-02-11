#!/bin/sh

if [ ! -f ".env" ]; then
  cp .env.example .env
  php artisan key:generate
fi

php artisan storage:link
php artisan optimize

# Wait until database is ready (if using database)
# while ! php artisan db:monitor >/dev/null 2>&1; do
#   echo "Waiting for database connection..."
#   sleep 1
# done

php artisan migrate --force

exec docker-php-entrypoint "$@"
