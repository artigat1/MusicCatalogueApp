(function () {
    'use strict';

    angular
        .module('app')
        .controller('musicController', musicController);

    musicController.$inject = ['$location']; 

    function musicController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'musicController';

        activate();

        function activate() { }
    }
})();
