var myApp = angular.module('myApp', ['ui.bootstrap']);
myApp.controller('carouselCtrl', function ($scope) {

    $scope.slides = [{
            src: 'img/img1.jpg',
            title: 'Lorem Ipsum Dolor Sit Amet, Consectetur'
        },
        {
            src: 'img/img1.jpg',
            title: 'Lorem Ipsum Dolor Sit Amet, Consectetur'
        },
        {
            src: 'img/img1.jpg',
            title: 'Lorem Ipsum Dolor Sit Amet, Consectetur'
        }];
});


