const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

studentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const email = document.getElementById('email').value.trim();
  const department = document.getElementById('department').value.trim();

  if (!name || !age || !email || !department) {
    alert('Please fill in all fields!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `Name: ${name}, Age: ${age}, Email: ${email}, Department: ${department}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => studentList.removeChild(li);

  li.appendChild(deleteBtn);
  studentList.appendChild(li);

  studentForm.reset();
});
