document.querySelector('.btn-1').addEventListener('click', function(e) {
    e.preventDefault()
    document.getElementById('loginModal').classList.add('active');
  });
  function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
  }
document.querySelector('.btn-1').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('loginModal').classList.add('active');
});
function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
}
function closeSignupModal() {
  document.getElementById('signupModal').classList.remove('active');
}
// Signup link in login modal
// Use event delegation to ensure it works after DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
  var signupLink = document.querySelector('.login-modal .signup-link a');
  if (signupLink) {
    signupLink.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('loginModal').classList.remove('active');
      document.getElementById('signupModal').classList.add('active');
    });
  }
  var showLogin = document.getElementById('showLogin');
  if (showLogin) {
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('signupModal').classList.remove('active');
      document.getElementById('loginModal').classList.add('active');
    });
  }
});


// Closing hamburger if clicked outside

document.addEventListener('click', function(e) {
    const burgerToggle = document.getElementById('burger-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const burgerContainer = document.querySelector('.burger-container');
    // Only close if menu is open and click is outside both menu and burger icon
    if (burgerToggle && burgerToggle.checked) {
      if (!navMenu.contains(e.target) && !burgerContainer.contains(e.target) && e.target !== burgerToggle) {
        burgerToggle.checked = false;
      }
    }
  });
