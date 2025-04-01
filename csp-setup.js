// csp-setup.js
document.addEventListener('DOMContentLoaded', function () {
    const meta = document.createElement('meta');
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = "default-src 'self'; script-src 'self' https://cdnjs.cloudflare.com https://raw.githubusercontent.com; style-src 'self'; img-src 'self'; font-src 'self';";
    document.head.appendChild(meta);
});