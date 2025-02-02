export function setAccessTokenCookie(accessToken: string) {
  if (typeof document !== 'undefined') {
    document.cookie = `access_token=${accessToken}; path=/`;
  }
}