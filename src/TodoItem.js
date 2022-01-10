import {Component} from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props)

    this.removeHandler = this.removeHandler.bind(this)
    }

    removeHandler(){
        this.props.remove();
    }

    render(){
        return(
            <div>
                <div>{this.props.innerText}</div>
                <button onClick={this.removeHandler}>X</button>
            </div>
        )
    }
}

export default TodoItem;