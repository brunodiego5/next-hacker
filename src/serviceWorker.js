export function register() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("service worker registration successful", registration);
      })
      .catch((err) => {
        console.warn("service worker registration failed", err.message);
      });
  }
}
