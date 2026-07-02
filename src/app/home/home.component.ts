import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/counter.actions';
import { SharedImports } from '../shared-imports';
import { TodoComponent } from '../todo/todo.component';
import { StateModel } from '../store/counter.reducer';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, SharedImports, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  counter$;

  constructor(private store: Store<{counter : StateModel}>) {
    this.counter$ = this.store.select(state=>state.counter.counter);
    // <h2>Counter: {{ counter$ | async}}</h2>
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
