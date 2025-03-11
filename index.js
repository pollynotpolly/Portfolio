document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
    document.getElementById('increase-font').addEventListener('click', increaseFontSize);
    document.getElementById('decrease-font').addEventListener('click', decreaseFontSize);

});

function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('toggle-theme');
    if (body.getAttribute('data-theme') === 'high-contrast'){
        body.removeAttribute('data-theme');
        button.setAttribute('aria-pressed', 'false');
    } else {
        body.setAttribute('data-theme', 'high-contrast');
        button.setAttribute('aria-pressed', 'true');
    }
}

function increaseFontSize() {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).fontSize);
    root.style.fontSize = (currentSize + 2) + 'px';
  }
  
function decreaseFontSize() {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).fontSize);
    if (currentSize > 12) {
      root.style.fontSize = (currentSize - 2) + 'px';
    }
  }
  
function showMessage(message) {
    const alert = document.createElement('div');
    alert.setAttribute('role', 'alert');
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 2000);
  }