(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider']

    angular.module('musicCatalogueApp', [
        'ngRoute',
        'masonry',
        'ngMaterial',
        'musicServices'
    ]).config(function($mdThemingProvider, $mdIconProvider){

        $mdIconProvider
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue');

    }););

})();