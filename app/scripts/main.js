'use strict';

var app = angular.module('myApp', ['ngRoute','ngResource']);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : ' components/home.html'
    })
    .when('/home', {
        templateUrl : 'components/home.html'
    })
    .when('/dashboard', {
        templateUrl : 'components/container.html'
    })
    .when('/ejercicios', {
        templateUrl : 'components/ejercicios.html',
        controller: 'exercies'
    })
    .when('/instructor', {
        templateUrl : 'components/instructor.html'
    })
    .when('/libros', {
        templateUrl : 'components/libros.html',
        controller: 'books'
    })
    .when('/about', {
        templateUrl : 'components/about.html'
    })
    .otherwise({
        redirectTo : '/'
    });
}]);

// books Component
app.controller('books', function ($scope, dataResource) {
    $scope.datosResource = dataResource.get();
    $scope.myFunction = function(index) {
      console.log('Index selecionado: '+index);
    };
});

app.factory('dataResource', function ($resource) {
  return $resource('../apis/books.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});

// ejercicios Component
app.controller('exercies', function ($scope, ejercicios) {
    $scope.ejercicios = ejercicios.get();
});

app.factory('ejercicios', function ($resource) {
  return $resource('../apis/ejercicios.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});
