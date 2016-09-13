// import { Component, EventEmitter } from '@angular/core';
//
// @Component({
//   moduleId: module.id,
//   selector: 'todo',
//   templateUrl: 'todo.component.html',
// })
var Todo = angular.module('Todo', []);
// export class TodoComponent {
function mainController($scope, $http) {
    todos: [];
    todosCompleted: [];
    constructor();
    {
        this.todos = [];
        this.todosCompleted = [];
    }
    add(newtodo, string);
    boolean;
    {
        this.todos.push(newtodo);
        newtodo = null;
        return false;
    }
    completed(name, string);
    void {
        let: index = this.todos.indexOf(name, 0),
        let: complete = this.todos[index],
        if: function (index) {
            if (index === void 0) { index =  != undefined; }
            this.todosCompleted.push(complete);
            this.todos.splice(index, 1);
            console.log('Completed tod ', this.todosCompleted);
        }
    };
    remove(name, string);
    void {
        let: index = this.todos.indexOf(name, 0),
        if: function (index) {
            if (index === void 0) { index =  != undefined; }
            this.todos.splice(index, 1);
        }
    };
    delete (name);
    string;
    void {
        let: index = this.todosCompleted.indexOf(name, 0),
        if: function (index) {
            if (index === void 0) { index =  != undefined; }
            this.todosCompleted.splice(index, 1);
        }
    };
}
//# sourceMappingURL=todo.component.js.map
