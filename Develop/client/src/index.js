import { Workbox } from 'workbox-window';
import Editor from './editor';
import { initIndexedDB, saveContent, loadContent } from './js/database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner" />
    </div>
  `;
  main.appendChild(spinner);
};

(async () => {
  const editor = new Editor();
  const textEditor = editor.getTextArea();

  // Load saved content
  const savedContent = await loadContent();
  if (savedContent) {
    textEditor.value = savedContent;
  } else {
    loadSpinner();
  }

  // Save content when the textarea loses focus
  textEditor.addEventListener('blur', () => {
    saveContent(textEditor.value);
  });

  // Register service worker
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/src-sw.js');
    wb.register();
  } else {
    console.error('Service workers are not supported in this browser.');
  }

  // Add PWA installation logic
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    // Show the install button
    // ...
  });

  // Add a click event listener to the install button
  // ...
  // When the button is clicked, prompt the user to install the PWA
  // ...
})();
