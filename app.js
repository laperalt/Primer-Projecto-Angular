/* Especifico que voy a hacer una app con Angular y cuales son las librerias que voy a usar. Tengo que buscar en la documentacion de la libreria cual es la directiva que tengo que escribir ng-libreria*/
var app = angular.module("StarterApp", ["ngMaterial", "ngMdIcons"]);

/* app.controller("nombreControlador", ["$parametro1", "$parametro2", function($parametro1, parametro2){

}])*/
/* Los parametros son los componentes que voy a usar de material angular*/

app.controller('AppCtrl', ['$scope', '$mdBottomSheet', '$mdSidenav', "$mdDialog", function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){

  /* Defino una funcion que va hacer que el menu se muestre y se oculte nombreFuncion = function(parametro){} */
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  /* Defino el menu con un JSON */
  $scope.menu = [
    {
      link : '',
      title: 'Inicio',
      icon: 'dashboard'
    },

    {
      link : '',
      title: 'Rockers',
      icon: 'group'
    },

    {
      link : '',
      title: 'Mensajes',
      icon: 'message'
    },
  ];

  /* Defino el submenu con otro JSON */
  $scope.submenu = [
    {
      link : '',
      title: 'Borrar',
      icon: 'delete'
    },

    {
      link : '',
      title: 'Configuración',
      icon: 'settings'
    },
  ];

}]);
