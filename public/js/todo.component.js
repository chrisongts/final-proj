System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                    this.todos = [];
                    this.todosCompleted = [];
                }
                TodoComponent.prototype.add = function (newtodo) {
                    this.todos.push(newtodo);
                    newtodo = null;
                    return false;
                };
                TodoComponent.prototype.completed = function (name) {
                    var index = this.todos.indexOf(name, 0);
                    var complete = this.todos[index];
                    if (index !== undefined) {
                        this.todosCompleted.push(complete);
                        this.todos.splice(index, 1);
                        console.log('Completed tod ', this.todosCompleted);
                    }
                };
                TodoComponent.prototype.remove = function (name) {
                    var index = this.todos.indexOf(name, 0);
                    if (index !== undefined) {
                        this.todos.splice(index, 1);
                    }
                };
                TodoComponent.prototype.delete = function (name) {
                    var index = this.todosCompleted.indexOf(name, 0);
                    if (index !== undefined) {
                        this.todosCompleted.splice(index, 1);
                    }
                };
                TodoComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'todo',
                        templateUrl: 'todo.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map