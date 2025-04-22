function sanitizeInput(element) {
    element.value = element.value.replace(/[<>]/g, "");
}

document.getElementById('paste-text').addEventListener('input', function() {
    sanitizeInput(this);
});
