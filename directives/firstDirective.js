var app = angular.module("myApp");
app.directive('homeDirective', function(){
	return{
		restrict: 'E',
		templateUrl: "views/dev.html"
	}
})
