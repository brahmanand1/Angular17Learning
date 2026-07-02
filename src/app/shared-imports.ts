// shared-imports.ts
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const SharedImports = [
  CommonModule,
  ReactiveFormsModule,
  TodoComponent,
  FormsModule,
  ReactiveFormComponent,
];
