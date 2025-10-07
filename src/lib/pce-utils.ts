// Генерация code_verifier (43-128 символов)
export function generateCodeVerifier() {
  const length = Math.floor(Math.random() * (128 - 43 + 1)) + 43;
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let result = '';
  
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);
  
  for (let i = 0; i < length; i++) {
    result += charset[randomValues[i] % charset.length];
  }
  
  return result;
}

// Генерация code_challenge из code_verifier
export async function generateCodeChallenge(codeVerifier: any) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  
  return base64UrlEncode(hash);
}

function base64UrlEncode(buffer: any) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  
  return btoa(binary)
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Генерация state параметра
export function generateState() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64UrlEncode(array);
}