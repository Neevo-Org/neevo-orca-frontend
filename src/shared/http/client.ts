import { appEnv } from '../config/env';

function createUrl(path: string) {
  if (!appEnv.apiBaseUrl) {
    throw new Error('VITE_API_BASE_URL is required when VITE_DATA_MODE=api.');
  }

  return new URL(path.replace(/^\/+/, ''), `${appEnv.apiBaseUrl}/`);
}

export async function httpGet<T>(path: string) {
  const url = createUrl(path);
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`GET ${url.pathname} failed with status ${response.status}.`);
  }

  return (await response.json()) as T;
}
