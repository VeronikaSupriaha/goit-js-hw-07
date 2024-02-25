const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(info);
  event.currentTarget.reset();
}
