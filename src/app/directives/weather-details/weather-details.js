const app = angular.module('weather');

app.directive('weatherDetails', function(){
    return {
        templateUrl: './app/directives/weather-details/weather-details.html',
        controller: weatherDetailsController,
        controllerAs: 'weatherDetails'
    }
});

function weatherDetailsController($scope) {
    $scope.message = "weather details Directive"
}