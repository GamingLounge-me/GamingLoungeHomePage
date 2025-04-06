# GamingLoungeHomePaage

Build with vite and react.

## Troubelshooting

if you want to use the java script bases virtual paths you need to redirect all paths to the index.html.<br>
.htaccess:
```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule . index.html [L]
```
