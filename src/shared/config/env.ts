export type DataMode = 'mock' | 'api';

function readDataMode(): DataMode {
  const value = import.meta.env.VITE_DATA_MODE?.trim().toLowerCase();

  if (value === 'api') {
    return 'api';
  }

  return 'mock';
}

function readApiBaseUrl() {
  return import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/+$/, '') ?? '';
}

export const appEnv = {
  dataMode: readDataMode(),
  apiBaseUrl: readApiBaseUrl(),
};
