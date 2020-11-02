'use strict';

angular.module('chatapp').config(['$locationProvider', '$routeProvider',routeResolver]);

function routeResolver($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  // http://localhost:8000/#!/chat
  $routeProvider
      .when('/chat',
        {
          templateUrl: 'pages/chat/chat.html',
          controller: 'chatController',
        }
      )
      .otherwise({redirectTo: '/'});
};
