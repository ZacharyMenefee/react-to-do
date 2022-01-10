import {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props)

        this.state = {
            todos: []
        };

        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };
    

    render(){
        const todos = todos.map(todo => (
            <TodoItem remove={this.remove(todo_id)}/>
        ))

        return(
            <div>
                {todos}
            </div>
        )
    }
}

export default TodoList;