import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { UtiltyService } from 'src/app/services/utility/utilty.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {


  todoArray: Todo[] = []

  constructor(private utilityService: UtiltyService){
    const todo1 = new Todo('comprare il pane', false);
    const todo2 = new Todo('chiamare la nonna', false);
    const todo3 = new Todo('pagare la bolleta', false);

    this.todoArray = [todo1, todo2, todo3];
  }





  sortTodo():void{
    this.todoArray = this.utilityService.sortArrayAlphabetically(this.todoArray);
  }
}
