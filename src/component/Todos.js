import React from "react";
import {connect} from "react-redux";
import {Input, Container, List, Radio, Segment, Loader, Dimmer} from 'semantic-ui-react'
import { addTodoAsync, changeFilter, toggleChild } from "../redux/todos/actions";
import {Todo} from "./Todo";
import {filterTodos} from "../redux/todos/selector";

class TodosComponent extends React.Component {
  state = {
    inputTodo: '',
  };

  handleAddTodo = () =>
  {
    this.props.addTodoAsync(this.state.inputTodo);
    this.setState({inputTodo: ''})
  };

  handleTodoOnClick = (event, data) =>
  {
    this.props.toggleChild(data.children.key);
  };


  handleRadioChange = (e, { value }) =>
  {
    this.props.changeFilter(value);
  };

  render () {
    const listTodo = this.props.todosFiltered.map((elem) => (<List.Item key={elem}><Todo key={elem} todo={this.props.todos[elem]}/></List.Item>));
    return (
      <Container >
        <Segment>

        <Input
          onChange={(e, { value }) => this.setState({inputTodo: value})}
          action={{content: "AddTodo", onClick: this.handleAddTodo }}
          value={this.state.inputTodo}
          placeholder={"todo"}/>

        <List divided relaxed onItemClick={this.handleTodoOnClick} items={listTodo} />
          <Dimmer active={this.props.loading}>
            <Loader />
          </Dimmer>
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
        </Segment>

      </Container>
    );
  }
}

const TodosConnect = connect(
  (state) => ({
    loading: state.todos.loading,
    todos: state.todos.todos,
    todosFiltered: filterTodos(state),
    filter: state.todos.filter
  }),
  {
    addTodoAsync,
    toggleChild,
    changeFilter
  })(TodosComponent);

export const Todos = TodosConnect;
