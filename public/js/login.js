
const loginFormHandler = async (event) => {
  event.preventDefault();
      alert('Failed to login');
};




const signupFormHandler = async (event) => {
  event.preventDefault();


      alert('Failed to sign up.');
  

};




document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

