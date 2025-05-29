import './styles.scss';
import generatePalette from './components/palette';

const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', () => generatePalette());
generatePalette();
