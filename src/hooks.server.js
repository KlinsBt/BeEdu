
/** @type {import('@sveltejs/kit').Handle} */

export function handle({ event, resolve }) {

  if (event.url.pathname.startsWith('/en')) {
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%lang%', "en")
    });
  }

  if (event.url.pathname.startsWith('/esp')) {
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%lang%', "esp")
    });
  }

  if (event.url.pathname.startsWith('/')) {
    return resolve(event, {
      // transformPageChunk: ({pathname}) => pathname.replace('/', '/en')
      transformPageChunk: ({ html }) => html.replace('%lang%', "en"),
    });
  }

}
