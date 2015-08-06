var app = angular.module("myApp");
app.directive('dirWeather', function(){
	return{
		restrict: 'E',
		templateUrl: "views/weather.html",
	
	controller: function($scope, weatherService){

	weatherService.getWeather("Provo, UT")
        .then(function (data) {
          	$scope.weather = data.weather;
          	$scope.temp = data.temperature;

  		});
    }
}

})