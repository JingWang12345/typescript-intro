import { Component } from '@angular/core';
import { ITodo } from 'src/app/model/i-todo';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data/data.service';
import { UtiltyService } from 'src/app/services/utility/utilty.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {


  todoArray: ITodo[] = []

  constructor(private utilityService: UtiltyService, private dataS: DataService){
    // const todo1 = new Todo('comprare il pane', false);
    // const todo2 = new Todo('chiamare la nonna', false);
    // const todo3 = new Todo('pagare la bolleta', false);

    // this.todoArray = [todo1, todo2, todo3];
    this.dataS.getData().then(data => {
      console.log(data);
      this.todoArray = data;
      console.log(this.todoArray)
});
  }





  sortTodo():void{
    this.todoArray = this.utilityService.sortArrayAlphabetically(this.todoArray);
  }
}
