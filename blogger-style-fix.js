document.addEventListener('DOMContentLoaded', function() {
    const linkElement = document.querySelector('link[href*="authorization.css"]');
    if (linkElement && linkElement.media !== 'all') {
        linkElement.media = 'all';
    }
});
