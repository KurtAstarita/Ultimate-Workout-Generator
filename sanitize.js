function sanitizeInput(text) {
  return DOMPurify.sanitize(text);
}

document.getElementById('paste-text').addEventListener('input', function() {
  this.value = sanitizeInput(this.value);
});
