'use strict';

var app = angular.module('app', ['chart.js', 'btford.socket-io'])

.factory('mySocket', function (socketFactory) {
  return socketFactory();
})

.controller('DoughnutCtrl', function ($scope, mySocket) {
  $scope.labels = ['Option 1', 'Option 2', 'Option 3'];
  $scope.data = [0, 0, 0];

  mySocket.connect();

  mySocket.on('bcVote', function (data) {
    var n = data.key;
    $scope.data[n] = data.votes; // We don't increment, to be sure to be sync
  });

  mySocket.on('reset', function (data) {
    $scope.data = [0, 0, 0];
  });

  $scope.vote = function (n) {
    $scope.data[n]++;
    $scope.message = '';
    mySocket.emit('clientVote', {key: n, votes: $scope.data[n]});
  }

  $scope.reset = function () {
    $scope.data = [0, 0, 0];
    mySocket.emit('reset');
  }
});
