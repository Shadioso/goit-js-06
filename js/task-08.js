const form = document.querySelector(`.login-form`);
const inputs = document.querySelectorAll(`input`);
const submitValidForm = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const values = Object.fromEntries(formData.entries());
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      alert("error");
    }
  });
  form.reset();
  console.log(values);
};

//
form.addEventListener(`submit`, submitValidForm);
