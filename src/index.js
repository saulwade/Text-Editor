// Retrieve the necessary elements from the DOM
const editor = document.getElementById('editor');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');

// Event listener for the save button
saveBtn.addEventListener('click', () => {
  const content = editor.value;
  saveContent(content);
});

// Event listener for the load button
loadBtn.addEventListener('click', () => {
  loadContent();
});

// Save content to localStorage
const saveContent = (content) => {
  localStorage.setItem('textEditorContent', content);
  alert('Content saved successfully!');
};

// Load content from localStorage
const loadContent = () => {
  const content = localStorage.getItem('textEditorContent');
  if (content) {
    editor.value = content;
    alert('Content loaded successfully!');
  } else {
    alert('No saved content found.');
  }
};
