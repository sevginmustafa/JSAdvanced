function notify(message) {
  const notification = document.getElementById('notification');
  notification.style.display = 'block';
  notification.textContent = message;
  notification.addEventListener('click', onclick);

  function onclick(ev) {
    ev.target.style.display = 'none';
  }
}