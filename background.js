const USER_ID = 'dd6ebd09-7fe1-47da-bd17-db117e8b7fd0/settings';

const LOCALHOST = 'http://localhost:8080';

const urls = {
  LOCALHOST,
  ADMIN_LOGIN_PATH_START: `${LOCALHOST}/realms/master/protocol/`,
  USERS_PAGE: `${LOCALHOST}/admin/master/console/#/example/users`,
  IMPERSONATED_ACCOUNT_PAGE: `${LOCALHOST}/realms/example/account/#/`,
  ACCOUNT_LOGIN_PATH_START: `${LOCALHOST}/realms/example/protocol/`,
};
urls.SPECIFIC_USER_PAGE = `${urls.USERS_PAGE}/${USER_ID}`;

const running = {
  goToLoginPage: false,
  login: false,
  impersonate: false,
};

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.startsWith(urls.ADMIN_LOGIN_PATH_START) && !tab.url.startsWith(urls.USERS_PAGE)) {
    console.info('onClicked.goToLoginPage');
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: [ 'goToLoginPage.js' ],
    });
    return;
  }

  if (!tab.startsWith(urls.LOCALHOST)) {
    return;
  }

  if (tab.url.startsWith(urls.ADMIN_LOGIN_PATH_START)) {
    console.info('onClicked.login');
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: [ 'login.js' ],
    });
    return;
  }

  if (tab.url.startsWith(urls.SPECIFIC_USER_PAGE)) {
    console.info('onClicked.impersonate');
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: [ 'impersonate.js' ],
    });
    return;
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') {
    return;
  }

  if (!tab.url.startsWith(urls.LOCALHOST)) {
    return;
  }

  if (tab.url.startsWith(urls.ACCOUNT_LOGIN_PATH_START)) {
    console.info('onUpdated.goToLoginPage');
    chrome.scripting.executeScript({
      target: { tabId },
      files: [ 'goToLoginPage.js' ],
    });
    return;
  }

  if (tab.url.startsWith(urls.ADMIN_LOGIN_PATH_START)) {
    console.info('onUpdated.login');
    chrome.scripting.executeScript({
      target: { tabId },
      files: [ 'login.js' ],
    });
    return;
  }

  if (tab.url.startsWith(urls.SPECIFIC_USER_PAGE)) {
    console.info('onUpdated.impersonate');
    chrome.scripting.executeScript({
      target: { tabId },
      files: [ 'impersonate.js' ],
    });
    return;
  }

  if (tab.url.startsWith(urls.IMPERSONATED_ACCOUNT_PAGE)) {
    console.info('onUpdated.closeTab');
    window.close();
    return;
  }
});
