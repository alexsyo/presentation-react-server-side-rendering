module.exports = (html) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>SSR - presentation</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}