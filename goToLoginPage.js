(function () {
  const USER_ID = 'dd6ebd09-7fe1-47da-bd17-db117e8b7fd0/settings';

  const urls = {
    USERS_PAGE: `http://localhost:8080/admin/master/console/#/example/users`,
  };
  urls.SPECIFIC_USER_PAGE = `${urls.USERS_PAGE}/${USER_ID}`;

  window.open(urls.SPECIFIC_USER_PAGE, '_self');
})();
