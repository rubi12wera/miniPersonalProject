var app = angular.module("myApp", ['firebase','ngRoute']);
 
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'FirstController'
        })
        .when('/students', {
            templateUrl: 'views/students.html',
            controller: 'SecondController'
        })
        .when('/reviews', {
            templateUrl: 'views/reviews.html',
            controller: 'reviewsController',
        })

        .otherwise({
            redirectTo: '/home'
        });

})
      

