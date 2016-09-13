import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo',
  templateUrl: 'todo.component.html',
})

// var Todo = angular.module('Todo', []);

export class TodoComponent {

// function mainController($scope, $http)
  public todos: string[];
  public todosCompleted: string[];

  constructor() {
    this.todos = [];
    this.todosCompleted = [];
  }

add(newtodo : string) : boolean {
   this.todos.push(newtodo);
   newtodo = null;
   return false;
}

completed(name: string) : void {
  let index = this.todos.indexOf(name, 0);
  let complete = this.todos[index];
   if (index !== undefined) {
     this.todosCompleted.push(complete);
     this.todos.splice(index, 1);
     console.log('Completed tod ', this.todosCompleted);
  }
}

remove(name: string) : void {
  let index = this.todos.indexOf(name, 0);
  if (index !== undefined) {
     this.todos.splice(index, 1);
  }
}

delete(name: string) : void {
  let index = this.todosCompleted.indexOf(name, 0);
  if (index !== undefined) {
     this.todosCompleted.splice(index, 1);
  }
}
}
