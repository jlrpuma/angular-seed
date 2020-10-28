'use strict';

angular.module('chatapp').config(['$locationProvider', '$routeProvider',routeResolver]);

function routeResolver($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
      .when('/chat',
        {
          templateUrl: 'pages/chat.html',
          controller: 'chatController',
        }
      )
      .otherwise({redirectTo: '/'});
};
