!function(){"use strict";function a(a){function b(){}var c=this;c.title="musicController",b()}angular.module("app").controller("musicController",a),a.$inject=["$location"]}(),function(){"use strict";function a(a){return a("/api/music/:id")}angular.module("musicServices",["ngResource"]).factory("Music",Music),a.$inject=["$resource"]}();