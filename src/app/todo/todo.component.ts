import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../store/todo/todo.reducer';
import { SharedImports } from '../shared-imports';
import { Store } from '@ngrx/store';
import { addItem, getAllTodos,markAsComplete, removeItem } from '../store/todo/todo.action';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [SharedImports],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
todos : Array<TodoModel> = [];
task : string = ''


constructor(private store : Store<{todo : Array<TodoModel>}>){

}

  ngOnInit(): void {
    this.store.select((store) => store.todo).subscribe({
      next: (res) => {
        this.todos = res;
      }
    })
  }

  addItem() {
    this.store.dispatch(addItem({ data: { id: this.todos.length + 1, name: this.task, status: 'pending' } }))
  }

  markComp(id: number) {

    this.store.dispatch(markAsComplete({ id: id }))
  }
  removeItem(id: number) {
    this.store.dispatch(removeItem({ id: id }))
  }

}
