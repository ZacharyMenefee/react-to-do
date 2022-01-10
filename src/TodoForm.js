import { Component } from "react";
import {v4 as uuidv4} from 'uuid'

class TodoForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            innerText: "",
        }
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
                    onChange={this.handleChange}/>

                    <button>Add New Todo</button>
                </div>
            </form>
        )
    }
}