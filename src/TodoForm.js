import { Component } from "react";
import {v4 as uuidv4} from 'uuid'

class TodoForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            innerText: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const newTodo = {...this.state, id: uuidv4()}
        this.props.addTodo(newTodo);
        this.setState({
            innerText: "",
        });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="innerText">Todo: </label>
                    <input id="innerText"
                    name="innerText"
                    type="text"
                    value={this.state.innerText}
                    onChange={this.handleChange}
                    />
                </div>
                <button>Add New Todo</button>
            </form>
        )
    }
}

export default TodoForm;