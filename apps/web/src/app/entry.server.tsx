import { RemixServer } from 'react-router';
import { renderToString } from 'react-dom/server';

export default function handleRequest({ request, responseStatusCode, responseHeaders, remixContext }) {
  return renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );
}
