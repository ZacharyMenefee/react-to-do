import {Component} from 'react'
import './Todo.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
                <CSSTransition key='editing' timeout={500} classNames='form'>
                <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input 
                        id='innerText'
                        name='innerText'
                        type='text'
                        value={this.state.innerText}
                        onChange={this.handleChange}
                        placeholder={this.state.innerText}/>
                    <button>Submit Changes</button>
                </form>
                </CSSTransition>
            )
        }else if (!this.state.isEditing){
            result = (
                <CSSTransition key='normal' timeout={500} classNames='task-text'>
                    <li className="Todo-task" onClick={this.handleToggle}>
                        {this.props.innerText}
                    </li>
                </CSSTransition>
       )};
        return (
            <TransitionGroup
                className={this.props.isFinished ? "Todo completed" : "Todo"}
            >
          {result};
          <div className='Todo-buttons'>
            <button onClick={this.toggleEdit}>
                <i class='fas fa-pen' />
            </button>
          <button onClick={this.removeHandler}>
            <i class='fas fa-trash' />
          </button>
        </div>
      </TransitionGroup>
        )}
}

export default TodoItem;