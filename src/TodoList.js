import {Component} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props)

        this.state = {
            todos: []
        };

        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    remove(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    

    render(){
        const todos = this.state.todos.map(todo => {
            return <TodoItem innerText={todo.innerText} remove={() => this.remove(todo.id)}/>
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