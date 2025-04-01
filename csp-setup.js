document.addEventListener('DOMContentLoaded', function () {
    const meta = document.createElement('meta');
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = "default-src 'self'; script-src 'self' https://cdnjs.cloudflare.com https://raw.githubusercontent.com; style-src 'self' https://www.blogger.com; img-src 'self' https://blogger.googleusercontent.com; font-src 'self'; frame-src 'self' https://www.blogger.com https://www.blogger.com/comment/frame/ https://www.blogger.com/navbar/;";
    document.head.appendChild(meta);
});
