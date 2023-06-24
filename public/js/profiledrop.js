// Get references to the necessary elements for the profile dropdown button.
const userMenu = document.getElementById('user-menu-items');
const userMenuButton = document.getElementById('user-menu-button');
const userProfileButton = document.getElementById('user-menu-item-0');

// Add event listener to the button
userMenuButton.addEventListener('click', () => {
// Toggle the visibility of the dropdown menu with a transition effect
  const expanded = userMenuButton.getAttribute('aria-expanded') === 'true' || false;
  userMenuButton.setAttribute('aria-expanded', !expanded);

  if (expanded) {
    userMenu.style.opacity = '0';
    userMenu.style.transform = 'scale(0.95)';
    setTimeout(() => {
      userMenu.classList.add('hidden');
    }, 300);
  } else {
    userMenu.classList.remove('hidden');
    setTimeout(() => {
      userMenu.style.opacity = '1';
      userMenu.style.transform = 'scale(1)';
    }, 0);
  }
});

// Close the dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!userMenu.contains(event.target) && !userMenuButton.contains(event.target)) {  
    userMenuButton.setAttribute('aria-expanded', 'false');
    userMenu.style.opacity = '0';
    userMenu.style.transform = 'scale(0.95)';
    setTimeout(() => {
      userMenu.classList.add('hidden');
    }, 300);
  }
});

userProfileButton.addEventListener('click', () => {
  // Redirect to the profile page
  window.location.href = '/profile';
});