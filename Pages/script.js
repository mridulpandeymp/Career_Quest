const wrapper = document.querySelector('.wrapper');
const profileIcon = document.getElementById('profileIcon');
const closeLogin = document.getElementById('closeLogin');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const welcomeMessage = document.getElementById('welcomeMessage');
const logoutBtn = document.getElementById('logoutBtn');

let isLoggedIn = false; // Keep track of user authentication status

// Function to show the welcome message
function showWelcome() {
  welcomeMessage.textContent = `Welcome!`;
}

// Function to hide the welcome message
function hideWelcome() {
  welcomeMessage.textContent = '';
}

// Function to handle successful login
function handleLogin() {
  isLoggedIn = true;
  showWelcome();
  wrapper.classList.remove('active-popup');
}

// Function to handle logout
function handleLogout() {
  isLoggedIn = false;
  hideWelcome();
  const logoutPopup = document.createElement('div');
  logoutPopup.classList.add('logout-popup');
  logoutPopup.innerHTML = '<p>You are now logged out.</p>';
  document.body.appendChild(logoutPopup);
  setTimeout(() => {
    logoutPopup.remove(); // Remove the logout confirmation pop-up after a few seconds
  }, 2000); // Adjust the timeout duration as needed
}

profileIcon.addEventListener('click', () => {
  if (!isLoggedIn) {
    wrapper.classList.add('active-popup');
    hideWelcome();
  } else {
    handleLogout();
  }
});

closeLogin.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  hideWelcome();
});

showRegister.addEventListener('click', () => {
  wrapper.classList.add('active');
  hideWelcome();
});

showLogin.addEventListener('click', () => {
  wrapper.classList.remove('active');
  hideWelcome();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Your login logic here (validate credentials, etc.)
  // Assuming login is successful
  handleLogin();
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Your registration logic here (validate input, save to DB, etc.)
  const agreeTerms = true; // Example checkbox value
  if (!agreeTerms) {
    alert('Please agree to the terms and conditions.');
    return;
  }
  // Assuming registration is successful
  handleLogin();
  wrapper.classList.remove('active'); // Close the registration popup after successful registration
});
