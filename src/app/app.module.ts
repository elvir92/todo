import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { TodoAddComponent } from './views/todo-add/todo-add.component';
import { TodoListComponent } from './views/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: TodoListComponent
      },
      {
        path: 'add',
        component: TodoAddComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
