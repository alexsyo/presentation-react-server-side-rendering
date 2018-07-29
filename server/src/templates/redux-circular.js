import util from 'util';

export default (html, preloadedState) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>SSR - presentation</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${
            util.inspect(preloadedState, {showHidden: false, depth: null, maxArrayLength: null, breakLength: Infinity})
              .replace(/</g, '\\u003c')
              .replace(/\[Circular\]/g, 'null')
          }
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}