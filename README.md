# GamingLoungeHomePaage

Build with:
- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [tailwindcss](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

## Troubelshooting

If you want to use the java script bases virtual paths you need to redirect all paths to the `__spa-fallback.html`.

Apache
`.htaccess`:
```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule . __spa-fallback.html [L]
```
