
//Setting the Hamburguer Menu for the mobile devices//
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');          //toggle the class show//
  hamburger.classList.toggle('active');   //toggle the class active//
});


//Onclick the logo page will be refresh//
const refreshBtn = document.getElementById('refresh-btn');
  
refreshBtn.addEventListener('click', function() {
  location.reload();
});


//validating the form//
const form = document.getElementById('contact-form');
const messageContainer = document.querySelector('.message-container');

// Validate phone number
function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}

// Handle form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Hide form
  form.style.display = 'none';

  // Show message
  const message = ` Thank you, ${firstName} ${lastName},for contacting us! We will get back to you at ${email} or ${phone} as soon as possible.`;
  messageContainer.textContent = message;
  message.classList.add('show');
});


