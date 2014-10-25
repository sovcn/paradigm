'use strict';

//Setting up route
angular.module('mean.graphs').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        //================================================
        // Check if the user is connected
        //================================================
        var checkLoggedin = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0')
                    $timeout(deferred.resolve, 0);

                // Not Authenticated
                else {
                    $timeout(function() {
                        deferred.reject();
                    }, 0);
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };
        //================================================
        // Check if the user is not conntect
        //================================================
        /*var checkLoggedOut = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0') {
                    $timeout(function() {
                        deferred.reject();
                    }, 0);
                    $location.url('/login');

                }

                // Not Authenticated
                else {
                    $timeout(deferred.resolve, 0);

                }
            });

            return deferred.promise;
        };*/
        //================================================


        // states for my app
        $stateProvider
            .state('all graphs', {
                url: '/graphs',
                templateUrl: 'graphs/views/list.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('create graph', {
                url: '/graphs/create',
                templateUrl: 'graphs/views/create.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('edit graph', {
                url: '/graphs/:graphId/edit',
                templateUrl: 'graphs/views/edit.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('graph by id', {
                url: '/graphs/:graphId',
                templateUrl: 'graphs/views/view.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('chronograph by id', {
            	url: '/graphs/:graphId/chronograph',
            	templateUrl: 'graphs/views/chronograph.html',
            	resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('import graph traversal', {
            	url: '/graphs/:graphId/import-traversal',
            	templateUrl: 'graphs/views/import-traversal.html',
            	resolve: {
                    loggedin: checkLoggedin
                }
            });
    }
]);