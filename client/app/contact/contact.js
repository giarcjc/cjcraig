angular.module('app')
 
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
    $stateProvider
	    .state('contact', {
	      url: '/contact',
	      templateUrl: 'app/contact/contact.html',
	      controller: 'ContactCtrl as cf'
	    })
	    .state('emailsent', {
	    	templateUrl: 'app/contact/emailsent.html'
	    })
	    .state('emailErr', {
	    	templateUrl: 'app/contact/emailErr.html'
      	})
  }]);