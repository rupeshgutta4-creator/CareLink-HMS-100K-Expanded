const API = import.meta.env.VITE_API_URL || '/api';

function getToken() {
  return localStorage.getItem('carelink_token') || '';
}

export async function api(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${API}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || res.statusText || 'Request failed');
    err.status = res.status;
    err.code = data.code;
    throw err;
  }
  return data;
}

export function setSession(token, user) {
  localStorage.setItem('carelink_token', token);
  localStorage.setItem('carelink_user', JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem('carelink_token');
  localStorage.removeItem('carelink_user');
}

export function getUser() {
  try {
    return JSON.parse(localStorage.getItem('carelink_user') || 'null');
  } catch {
    return null;
  }
}
