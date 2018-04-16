import React from "react";
import {connect} from "react-redux";
import {Input, Container, List, Radio} from 'semantic-ui-react'
import {addTodo, changeFilter, toggleChild} from "../redux/todos/actions";
import {Todo} from "./Todo";
import {filterTodos} from "../redux/todos/selector";

class TodosComponent extends React.Component {
  state = {
    inputTodo: '',
  };

  handleAddTodo = () =>
  {
    this.props.addTodo(this.state.inputTodo);
    this.setState({inputTodo: ''})
  };

  handleTodoOnClick = (event, data) =>
  {
    this.props.toggleChild(data.children.props.todo.id);
  };


  handleRadioChange = (e, { value }) =>
  {
    this.props.changeFilter(value);
  };

  render () {
    const listTodo = this.props.todos.map((elem) => (<List.Item key={elem.id}><Todo todo={elem}/></List.Item>));
    return (
      <Container>
        <Input
          onChange={(e, { value }) => this.setState({inputTodo: value})}
          action={{content: "AddTodo", onClick: this.handleAddTodo }}
          value={this.state.inputTodo}
          placeholder={"todo"}/>

        <List onItemClick={this.handleTodoOnClick} items={listTodo} />

        <Radio
          label='All'
          name='radioGroup'
          checked={this.props.filter === 0}
          onChange={this.handleRadioChange}
          value={0}
        />
        <Radio
          label='Active'
          name='radioGroup'
          checked={this.props.filter === 1}
          onChange={this.handleRadioChange}
          value={1}
        />
        <Radio
          label='Completed'
          name='radioGroup'
          checked={this.props.filter === 2}
          onChange={this.handleRadioChange}
          value={2}
        />
      </Container>
    );
  }
}

const TodosConnect = connect(
  (state) => ({
    todos: filterTodos(state),
    filter: state.todos.filter
  }),
  {
    addTodo,
    toggleChild,
    changeFilter
  })(TodosComponent);

export const Todos = TodosConnect;