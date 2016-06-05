sass scss/styles.scss:static/styles.css --sourcemap=none

cd js
cat init.js $(ls -I init.js) > ../static/site.js
