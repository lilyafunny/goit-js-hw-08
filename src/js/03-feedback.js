import throttle from 'lodash.throttle';
const LS_KAY = 'feedback-form-state';

const formData = {};
const refs = {
  form: document.querySelector('form'),
  textarea: document.querySelector('textarea'),
};

message();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LS_KAY, JSON.stringify(formData));
});

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.form.value === '' || refs.textarea.value === '') {
    return alert(`Please fill all fields!`);
  }

  evt.currentTarget.reset();
  localStorage.removeItem(LS_KAY);
}

function onTextareaInput(evt) {
  const value = evt.target.value;
  localStorage.setItem(LS_KAY, value);
}

function message() {
  const saveMessage = localStorage.getItem(LS_KAY);
  if (saveMessage) {
    refs.textarea.value = saveMessage;
  }
}
