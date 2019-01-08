import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITodo } from 'src/app/models';

import { getList, removeFromList } from '../../helpers/util'

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    //   styleUrls: ['todo-list.scss']
})
export class TodoListComponent implements OnInit {
    todos: ITodo[];

    ngOnInit() {
        this.todos = getList();
    }

    removeTodo(todo: ITodo) {
        removeFromList(todo);
        this.todos = getList();
    }
}
