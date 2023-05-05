import throttle from 'lodash.throttle';

const data = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

emailInput.addEventListener('input', () => {
  throttle(() => {
    data.email = emailInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)();
});

messageInput.addEventListener('input', () => {
  throttle(() => {
    data.message = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.clear();

  data.email = emailInput.value;
  data.message = messageInput.value;

  emailInput.value = '';
  messageInput.value = '';

  console.log(data);
});

document.addEventListener('DOMContentLoaded', () => {
  try {
    var currentData = JSON.parse(localStorage.getItem('feedback-form-state'));
    data.email = currentData.email;
    data.message = currentData.message;

    if (currentData.email != '' || currentData.message != '') {
      emailInput.value = currentData.email;
      messageInput.value = currentData.message;
    } else {
      emailInput.value = '';
      messageInput.value = '';
    }
  } catch (error) {
    console.error(error);
    emailInput.value = '';
    messageInput.value = '';
  }
});
