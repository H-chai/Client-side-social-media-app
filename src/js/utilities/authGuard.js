export function authGuard() {
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    window.location.href = "/Client-side-social-media-app/auth/login/";
  }
}