import { Component } from "react";
import {v4 as uuidv4} from 'uuid';
import './NewTodoForm.css'

class TodoForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            innerText: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addTodo({...this.state, id: uuidv4(), isFinished: false});
        this.setState({
            innerText: "",
        });
    }

    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="innerText">New Todo</label>
                    <input id="innerText"
                    name="innerText"
                    type="text"
                    value={this.state.innerText}
                    onChange={this.handleChange}
                    />
                <button>Add New Todo</button>
            </form>
        )
    }
}

export default TodoForm;