'use strict';
var Materialize;
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
    .when('/login', {
        templateUrl : 'components/login.html',
        controller:  'login'
    })
    .when('/instructor', {
        templateUrl : 'components/instructor.html',
        comtroller: 'instructor'
    })
    .when('/libros', {
        templateUrl : 'components/libros.html',
        controller: 'books'
    })
    .when('/ejE1', {
        templateUrl: 'components/ejercicios/escritura/ejercicio1.html',
        controller : 'exercies'
    })
    .when('/ejE2', {
        templateUrl: 'components/ejercicios/escritura/ejercicio2.html',
        controller : 'exercies'
    })
    .when('/ejE3', {
        templateUrl: 'components/ejercicios/escritura/ejercicio3.html',
        controller : 'exercies'
    })
    .when('/sumar', {
        templateUrl: 'components/ejercicios/matematicas/suma.html',
        controller : 'exercies'
    })
    .when('/restar', {
        templateUrl: 'components/ejercicios/matematicas/resta.html',
        controller : 'exercies'
    })
    .when('/multiplicacion', {
        templateUrl: 'components/ejercicios/matematicas/multiplicacion.html',
        controller : 'exercies'
    })
    .when('/division', {
        templateUrl: 'components/ejercicios/matematicas/division.html',
        controller : 'exercies'
    })
    .when('/about', {
        templateUrl : 'components/about.html'
    })
    .when('/prueba', {
        templateUrl : 'components/carousel-general.html'
    })
    .otherwise({
        redirectTo : '/'
    });
}]);

// ====================================== login instructor ============================
app.controller('login', function ($scope) {
  $scope.logear = function () {
    let username = $('#username').val();
    let password = $('#password').val();

    if (username === 'test' && password === 'test') {
      console.log('Correcto');
      window.location='#/instructor';
    } else {
      Materialize.toast('Usuario o Contraseña incorrecta intentalo de nuevo!!', 3000);
    }
  };
});

// ====================================== instructor =================================
app.controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'Pasar Lista', done:true},
      {text:'Revisar Temario', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) {
          todoList.todos.push(todo);
        }
      });
    };
});

// =================================== books Component ====================================
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

// ==================================== ejercicios Escritura Component ==============================
app.factory('ejerEscritura', function ($resource) {
  return $resource('../apis/ejercicios-escritura.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});

app.factory('serviceExercies', function(){
    return{
        data:{}
    };
});

app.controller('exercies', function ($scope, ejerEscritura, $location , serviceExercies) {
    $scope.ejerEscritura = ejerEscritura.get();
    $scope.getDatos = function (id, title , description, enlace){
        serviceExercies.data.ide = id;
        serviceExercies.data.titlee = title;
        serviceExercies.data.descriptions = description;
        serviceExercies.data.enlace= enlace;
        $location.url('components/ejercicios/escritura/ejercicio1.html');
    };
    $scope.idExercies = serviceExercies.data.ide;
    $scope.titleExercies = serviceExercies.data.titlee;
    $scope.descriptionExercies = serviceExercies.data.descriptions;
    $scope.enlaceExercies = serviceExercies.data.enlace;

    // ******************* Facil *********************
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

    // ***************** Medio ********************
    $scope.keyPressLavadora = function(){
      let word= $('#lavadora').val();
      if(word === 'lavadora'){
        $('#lavadora').attr('disabled','disabled');
        $('#lavadora').addClass('input-validate');
        $('#lavadora').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-lavadora').addClass('bounce');
      }else{
        $('#lavadora').addClass('input-Invalidate');
      }
    };

    $scope.keyPressPista = function(){
      let word= $('#pista').val();
      if(word === 'autopista'){
        $('#pista').attr('disabled','disabled');
        $('#pista').addClass('input-validate');
        $('#pista').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-pista').addClass('bounce');
      }else{
        $('#pista').addClass('input-Invalidate');
      }
    };

    $scope.keyPressAntena = function(){
      let word= $('#antena').val();
      if(word === 'antena'){
        $('#antena').attr('disabled','disabled');
        $('#antena').addClass('input-validate');
        $('#antena').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-antena').addClass('bounce');
      }else{
        $('#antena').addClass('input-Invalidate');
      }
    };

    $scope.keyPressBarco = function(){
      let word= $('#barco').val();
      if(word === 'barco'){
        $('#barco').attr('disabled','disabled');
        $('#barco').addClass('input-validate');
        $('#barco').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-barco').addClass('bounce');
      }else{
        $('#barco').addClass('input-Invalidate');
      }
    };

    // ************* Dificil ****************
    $scope.keyPressBolsa = function(){
      let word= $('#bolsa').val();
      if(word === 'bolsa'){
        $('#bolsa').attr('disabled','disabled');
        $('#bolsa').addClass('input-validate');
        $('#bolsa').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-bolsa').addClass('bounce');
      }else{
        $('#bolsa').addClass('input-Invalidate');
      }
    };

    $scope.keyPressPC = function(){
      let word= $('#pc').val();
      if(word === 'computadora'){
        $('#pc').attr('disabled','disabled');
        $('#pc').addClass('input-validate');
        $('#pc').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-pc').addClass('bounce');
      }else{
        $('#pc').addClass('input-Invalidate');
      }
    };

    $scope.keyPressBus = function(){
      let word= $('#bus').val();
      if(word === 'autobus'){
        $('#bus').attr('disabled','disabled');
        $('#bus').addClass('input-validate');
        $('#bus').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-bus').addClass('bounce');
      }else{
        $('#bus').addClass('input-Invalidate');
      }
    };

    $scope.keyPressMarker = function(){
      let word= $('#marker').val();
      if(word === 'marcador'){
        $('#marker').attr('disabled','disabled');
        $('#marker').addClass('input-validate');
        $('#marker').removeClass('input-Invalidate');
        Materialize.toast('Correcto!!', 3000);
        $('.img-marker').addClass('bounce');
      }else{
        $('#marker').addClass('input-Invalidate');
      }
    };
});

// ========================== Lectura ejercicios Component=====================
app.controller('ejLecturas', function ($scope, lecturas) {
    $scope.datosLecturas = lecturas.get();
});

app.factory('lecturas', function ($resource) {
  return $resource('../apis/ejercicios-lectura.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});

// ========================= Matematicas ejercicios Component =================

app.controller('ejMatematicas', function ($scope, Matematicas) {
    $scope.datosMatematicas = Matematicas.get();
});

app.factory('Matematicas', function ($resource) {
  return $resource('../apis/ejercicios-matematicas.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});
