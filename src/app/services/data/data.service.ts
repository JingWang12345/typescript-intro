import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Promise<Todo[]>{
    return fetch('./assets/fake-data.json')
    .then(resp => resp.json())
    .then(data => this.parseData(data))
  }

  parseData(data:any[]):Todo[]{
    const tempArray:Todo[] = [];
    for (const obj of data) {
      const newTodo = new Todo(obj.title, obj.isComplete);
      tempArray.push(newTodo);
    }
  return tempArray;
  }
}
