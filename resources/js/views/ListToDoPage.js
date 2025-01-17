import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateTodoPage from '../views/CreateTodoPage';
import All from '../views/viewListTodo/All';

import './CreateTodoPage.css';
import NavBarCreateTodo from '../components/NavBar/NavBarCreateTodo';

class ListToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: ['Unit 1', 'Unit 2', 'Unit 3', 'R&D']
    };
  }
  render() {
    return (
      <div className='container'>
        <div className='underNav'></div>
        <div className='row'>
          <div className='col-3'>
            <div className='sidebar-item'>
              <div className='make-me-sticky'>
                <div className='item'>
                  <p className='title'>
                    <strong>Your group</strong>
                  </p>
                  <ul className='nav nav-pills nav-stacked' role='tablist'>
                    {this.state.groups.map((group, index) => (
                      <li key={index}>
                        <a role='tab' data-toggle='pill'>
                          {group}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='content-section'>
              <BrowserRouter>
                <NavBarCreateTodo />
                <Switch>
                  <Route exact path='/listToDo' component={All} />
                  <Route exact path='/listToDo/All' component={All} />
                  <Route exact path='/listToDo/Process' component={CreateTodoPage} />
                  <Route exact path='/listToDo/Processing' component={CreateTodoPage} />
                  <Route exact path='/listToDo/OutOfDate' component={CreateTodoPage} />
                  <Route exact path='/listToDo/Wait' component={CreateTodoPage} />
                  <Route exact path='/listToDo/Finish' component={CreateTodoPage} />
                  <Route exact path='/listToDo/Pause' component={CreateTodoPage} />
                  <Route exact path='/listToDo/Cancelled' component={CreateTodoPage} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListToDoPage;
