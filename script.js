const body = document.body
document.title = 'Prak 3'

// background color
document.getElementById('bgColor').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

// Font size
document.getElementById('fontSize').addEventListener('input', function() {
    document.body.style.fontSize = this.value + 'px';
});

// Toggle Dark Mode
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Change Font Style
document.getElementById('fontStyle').addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="text" value="${taskText}" readonly>
      <button class="editButton">Edit</button>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);

    const editButton = li.querySelector('.editButton');
    editButton.addEventListener('click', () => {
      const input = li.querySelector('input');
      input.readOnly = false;
      editButton.textContent = 'Save';
      editButton.addEventListener('click', () => {
        input.readOnly = true;
        editButton.textContent = 'Edit';
      });
    });

    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    taskInput.value = '';
  }
});