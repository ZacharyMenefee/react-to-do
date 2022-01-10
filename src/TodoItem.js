import {Component} from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props)

    this.state = {
        isEditing: false,
        innerText: this.props.innerText,
     };

    this.removeHandler = this.removeHandler.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    }

    removeHandler() {
        this.props.remove();
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing,
        });
    }

    handleToggle(){
        this.props.toggleFinished(this.props.id)
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.state.innerText, this.props.id)
        this.setState({isEditing: false})
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <form onSubmit={this.handleUpdate}>
                    <div>
                        <input 
                        id='innerText'
                        name='innerText'
                        type='text'
                        value={this.state.innerText}
                        onChange={this.handleChange}
                        placeholder={this.state.innerText}/>
                    </div>
                    <button>Submit Changes</button>
                </form>
            )
        }else if (!this.state.isEditing){
            result = (
                <div>
                    <li onClick={this.handleToggle} style={{textDecoration: this.props.isFinished ? 'line-through' : null}}>{this.props.innerText}</li>
                    <button onClick={this.removeHandler}>X</button>
                    <button onClick={this.toggleEdit}>Edit</button> 
                </div>
       )};
        return result;
    }
}

export default TodoItem;