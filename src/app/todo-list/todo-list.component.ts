import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'todo';
  todo:string=""
  todoList:Array<{ todoName: String, isReadOnly: boolean, isDone:boolean }>=[];
  updatedValue:String="";
  

  //capturing the entered todo
  todoEntered(event: any){
    this.todo= event?.target?.value;
  }

  //added todo to a list
  addTodo(event:Event){
    let todos = {
      todoName:"",
      isReadOnly:true,
      isDone:false
    }
    todos.todoName=this.todo;
    this.todoList.push(todos);
    console.log(this.todoList);
    this.todo ="";
  }

  //to edit todo
  editTodo(i:number){
    //
    this.todoList.map((item,index)=>{
      if(index == i){
        this.todoList[index].isReadOnly=false;
      }
    })
  }

  //To capture the updated task
  updateTask(event:any){
    this.updatedValue = event.target.value;
  }

  //to update the todo 
  updateTodo(i:number){
    this.todoList.map((item,index)=>{
      //
      if(index === i){
        this.todoList[index].todoName = this.updatedValue;
        this.todoList[index].isReadOnly=true;

      }
    })
  }

  //todo done
  todoDone(i:number){
    this.todoList.map((item,index) => {
      if(index === i){
        this.todoList[index].isDone = true;
      }
    })
  }

  //deleteTodo
  deleteTodo(i:number){
    //
    this.todoList.map((item,index) => {
      if(index === i){
        this.todoList.splice(index, 1);
      }
    })
  }
}
