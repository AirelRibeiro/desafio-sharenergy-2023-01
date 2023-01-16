// JWT token validity check queried at: https://stackoverflow.com/questions/51292406/check-if-token-expired-using-this-jwt-library#:~:text=Function%20without%20the%20jwt%20library%3A

export function isTokenExpired(token: string) {
  return Date.now() >= JSON.parse(atob(token.split('.')[1])).exp * 1000;
}
