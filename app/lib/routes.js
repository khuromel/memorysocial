Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});



Router.route('/Profile', {
  name: 'user_profile',
  controller: 'UserProfileController',
  action: 'action',
  where: 'client'
});
