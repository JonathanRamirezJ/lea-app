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
    .when('/ejercicios2', {
        templateUrl: 'components/ejercicios/escritura/ejercicio1.html',
        controller : 'exercies'
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
app.factory('ejercicios', function ($resource) {
  return $resource('../apis/ejercicios.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});

app.factory('serviceExercies', function(){
    return{
        data:{}
    };
});

app.controller('exercies', function ($scope, ejercicios, $location , serviceExercies) {
    $scope.ejercicios = ejercicios.get();
    $scope.getDatos = function (title , description, enlace){
        serviceExercies.data.titlee = title;
        serviceExercies.data.descriptions = description;
        serviceExercies.data.enlace= enlace;
        $location.url('components/ejercicios/escritura/ejercicio1.html');
    };
    $scope.titleExercies = serviceExercies.data.titlee;
    $scope.descriptionExercies = serviceExercies.data.descriptions;
    $scope.enlaceExercies = serviceExercies.data.enlace;
    $scope.keyPressHome = function(){
      let word= $('#home').val();
      if(word === 'casa'){
        $('#home').attr('disabled','disabled');
        $('#home').addClass('input-validate');
        $('#home').removeClass('input-Invalidate');
        $('.img-home').addClass('bounce');
        Materialize.toast('Correcto!!', 3000);
      }else{
        $('#home').addClass('input-Invalidate');
      }
    };
    $scope.keyPressTree = function(){
      let word= $('#tree').val();
      if(word === 'arbol'){
        $('#tree').attr('disabled','disabled');
        $('#tree').addClass('input-validate');
        $('#tree').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-tree').addClass('bounce');
      }else{
        $('#tree').addClass('input-Invalidate');
      }
    };
    $scope.keyPressChild = function(){
      let word= $('#child').val();
      if(word === 'niño'){
        $('#child').attr('disabled','disabled');
        $('#child').addClass('input-validate');
        $('#child').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-child').addClass('bounce');
      }else{
        $('#child').addClass('input-Invalidate');
      }
    };
    $scope.keyPressDuck = function(){
      let word= $('#duck').val();
      if(word === 'pato'){
        $('#duck').attr('disabled','disabled');
        $('#duck').addClass('input-validate');
        $('#duck').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-duck').addClass('bounce');
      }else{
        $('#duck').addClass('input-Invalidate');
      }
    };
});
