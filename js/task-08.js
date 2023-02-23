const form = document.querySelector(`.login-form`);
const inputs = document.querySelectorAll(`input`);

const submitValidForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" && password.value === "") {
    return alert(`Please fill the fields`);
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  form.reset();
};
form.addEventListener(`submit`, submitValidForm);
