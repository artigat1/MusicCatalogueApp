(function () {
    'use strict';

    angular
     .module('musicServices', ['ngResource'])
     .factory('Music', Music);

    Movie.$inject = ['$resource'];

    function Movie($resource) {
        return $resource('/api/music/:id');
    }

})();