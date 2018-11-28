import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styles from './Dash.module.css';

const Task = ({ text, deleter }) => (
  <div
    className={styles.task}
    onClick={deleter}
  >
    {text}
    <span>x</span>
  </div>
)

class Dash extends React.Component {
  state = {
    taskText: '',
    tasks : [],
  }

  updateTaskText = (e) => {
    this.setState({ taskText: e.target.value });
  }

  addTask = (e) => {
    e.preventDefault();
    if (this.state.taskText === '') return;
    const newTasks = this.state.tasks.concat(this.state.taskText);
    this.setState({ tasks: newTasks, taskText: '' });
  }

  deleteTask = (index) => {
    const newTasks = this.state.tasks.filter((item, i) => i !== index);
    this.setState({ tasks: newTasks });
  }

  render() {
    let tasks =this.state.tasks.map((val, key) => {
      return (
        <Task
          key={key}
          text={val}
          deleter={() => this.deleteTask(key)}
        />
      )
    })

    return (
      <div>
        <div className={styles.headerContain}>
          <h1 className={styles.dashHeader}>Dashboard</h1>
          <Link to="/settings">
            <p>Settings</p>
          </Link>
          <Link to="/">
            <p>Logout</p>
          </Link>
        </div>
        <div className={styles.dash}>
          <div className={styles.column}>
            <form onSubmit={this.addTask} className={styles.inputRow}>
              <input
                type="text"
                placeholder="Create task"
                className={styles.textInput}
                value={this.state.taskText}
                onChange={e => this.updateTaskText(e)}
              />
              <button type="submit" className={styles.button}>Create</button>
            </form>
            {tasks}
          </div>
          <div className={styles.column}>
            <form onSubmit={this.addTask} className={styles.inputRow}>
              <input
                type="text"
                placeholder="Create task"
                className={styles.textInput}
                value={this.state.taskText}
                onChange={e => this.updateTaskText(e)}
              />
              <button type="submit" className={styles.button}>Create</button>
            </form>
            {tasks}
          </div>
        </div>
      </div>
    );
  }
}

export default Dash;
