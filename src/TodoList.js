import {Component, useState} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props)

        this.state = {
            todos: []
        };

        this.addTodo = this.addTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.remove = this.remove.bind(this)
        this.toggleFinished = this.toggleFinished.bind(this)
    }

    addTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
        const storeTodos = JSON.stringify(this.state.todos)
        localStorage.setItem('todolist', storeTodos)
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    
    editTodo(editedTodo, id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, innerText: editedTodo}
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos,
        });
    }

    toggleFinished(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, isFinished: !todo.isFinished}
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos,
        });
    }

    render(){
        const todos = this.state.todos.map(todo => {
            return <TodoItem 
            innerText={todo.innerText} 
            id={todo.id} 
            value={todo.id} 
            remove={() => this.remove(todo.id)}
            updateTodo={this.editTodo}
            isFinished={todo.isFinished}
            toggleFinished={this.toggleFinished}/>
        })

        return(
            <div>
                <ul>
                {todos}
                </ul>
                <TodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList;