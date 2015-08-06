var app = angular.module("myApp");

app.controller('SecondController', function($scope, $routeParams, studentListService){

$scope.users = studentListService.users;

})