const templateModal = document.getElementById('simple-modal');

function openModal() {
  templateModal.style.display = 'flex';
}

function closeModal() {
  templateModal.style.display = 'none';
}

window.onclick = function(event) {
  const page = document.getElementById('content');
  if (event.target === page) closeModal();
}