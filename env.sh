#!/bin/sh
echo "Replacing environment variables in JS files"

for file in /usr/share/nginx/html/assets/*.js*; do
  echo "Processing $file ..."

  sed -i 's|VITE_API_BASE_URL_PLACEHOLDER|'${VITE_API_BASE_URL}'|g' $file

done

exec "$@"
