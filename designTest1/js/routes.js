angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('payments', {
    url: '/page2',
    templateUrl: 'templates/payments.html',
    controller: 'paymentsCtrl'
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('qrCode', {
    url: '/page3',
    templateUrl: 'templates/qrCode.html',
    controller: 'qrCodeCtrl'
  })

  .state('myProfile', {
    url: '/page4',
    templateUrl: 'templates/myProfile.html',
    controller: 'myProfileCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});