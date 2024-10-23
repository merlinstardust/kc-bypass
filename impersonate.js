(function () {
  const urls = {
    SBAA: 'http://localhost:4200/',
  };

  // using functions ensures that each element is found fresh when needed
  const elements = {
    actionDropdown: () => document.querySelectorAll('[data-testid="action-dropdown"] button')[0],
    impersonateOption: () => document.querySelectorAll('[data-testid="action-dropdown"] button + ul li')[0],
    impersonateConfirmButton: () => document.getElementById('modal-confirm'),
  };

  setTimeout(() => {
    console.log('actionDropdown', elements.actionDropdown());
    elements.actionDropdown().click();
    console.log('clicked actionDropdown');

    console.log('impersonateOption', elements.impersonateOption());
    elements.impersonateOption().click();
    console.log('clicked impersonateOption');

    console.log('impersonateConfirmButton', elements.impersonateConfirmButton());
    elements.impersonateConfirmButton().click();
    console.log('clicked impersonateConfirmButton');

    window.open(urls.SBAA, '_self');
  }, 1000);
})();
