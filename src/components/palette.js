function getRandomColor(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function generatePalette(count = 5) {
  const palette = document.getElementById('palette');
  palette.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const color = getRandomColor();
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = color;
    box.textContent = color;
    box.title = 'Click to copy';

    box.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      showToast(`${color} copied!`);
    });

    palette.appendChild(box);
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    opacity: 0.9,
    zIndex: 9999,
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}