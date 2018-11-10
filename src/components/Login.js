import React, { Component } from 'react'
import img from './logo.png'
import styles from './Login.css';
import Image from 'react-image-resizer';
import { Link } from 'react-router-dom';
import Center from 'react-center';


















class LoginPage extends React.Component {
    constructor(props) {
    super(props);
	}
  componentDidMount(){
    document.title = "Login"
  }



  render() {

    return (
      <div className="LoginMain">
	  <Center>
        <div className="Logo">
			<Image src={img} height={400} width={600} />	
		

		</div>
		</Center>

		<Center>
          <form>
		  <div >
            <input placeholder="Username" />
			</div>
			<div>
			<input placeholder="Password" />
			</div>
			<div>
            <button type="submit"> Login </button>
			</div>

			<div style={{marginBottom:'300em'}}>
			<br/>
						Don't have an account? Sign up here!
			</div>
          </form>
	</Center>
      </div>
    )
  }
}

export default LoginPage