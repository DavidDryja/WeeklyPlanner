import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import styles from './Dash.module.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <div id = "task" className = {styles.task} onClick = {this.props.deleter}>
          {this.props.text}
        </div>
    );
  }
}

class Dash extends React.Component {
    state = {
      taskText: '',
      tasks : [],
    }

  render() {
      let tasks =this.state.tasks.map((val, key) => {
        return <Task key={key} text={val}
        deleter={() => this.deleteTask(key)} />
      }
    )

    return (
    <div>
        <div>
        <h className={styles.dashHeader}>DASH (Main App Page)</h>
              <Link to="/settings">
                <p>Settings</p>
              </Link>
              <Link to="/">
                <p>Landing</p>
              </Link>
          </div>
        
        <div>
            <div id = "app" className = {styles.app}>

            {tasks}

              <div className = "Enter"> 
              Enter in Task
              </div>

                <button id= "button" className = {styles.button} onClick ={this.addTask.bind(this)} >Submit</button>

                  <input type = "text"
                  id = "textInput"
                  className = {styles.textInput}
                  value = {this.state.taskText}
                  onChange = {taskText => this.updateTaskText(taskText)}
                  >
                  </input>
            </div>
          </div>
      </div>
  );

}

updateTaskText(taskText){
  this.setState({taskText: taskText.target.value})
}

addTask(){
  if (this.state.taskText === '') {return}
  this.state.tasks.push(this.state.taskText);
  this.setState({taskText: ''})
}

deleteTask(index){
  this.state.tasks.splice(index,1);
  this.setState({tasks: this.state.tasks})
}


}

export default Dash;