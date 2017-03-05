angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  }); 
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'

  })


  .state('app.barcode', {
    url: '/barcode',
    views: {
      'menuContent': {
        templateUrl: 'templates/barcode.html',
        controller: 'BarcodeCtrl'
      }
    }
  })

    .state('app.anasayfa', {
      url: '/anasayfa',
      views: {
        'menuContent': {
          templateUrl: 'templates/anasayfa.html',
          
        }
      }
    })

      .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

        .state('app.sonuc', {
      url: '/sonuc',
      views: {
        'menuContent': {
          templateUrl: 'templates/sonuc.html',
          controller: 'herbaryumCtrl'
        }
      }
    })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/anasayfa');
});
