(function () {
  // using functions ensures that each element is found fresh when needed
  const elements = {
    username: () => document.getElementById('username'),
    password: () => document.getElementById('password'),
    loginButton: () => document.getElementById('kc-login'),
  };

  elements.username().value = 'admin';
  elements.password().value = 'admin';
  elements.loginButton().click();
})();
