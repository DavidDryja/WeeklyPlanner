import React, { Component } from 'react'
import img from './logo.png'
import { Link } from 'react-router-dom';
import Image from 'react-image-resizer';

import Center from 'react-center';
import './Register.css';


class Register extends Component {
  
  
    constructor(props) {
    super(props);
	}
	
  componentDidMount(){
    document.title = "Login"
  }



  render() {

    return (
      <div className="RegisterMain">
	  <Center>
        <div className="header">
			<Image src={img} height={400} width={600} />	
		
		</div>
		</Center>
		<Center>
          <form>
		  <div >
            <input placeholder="Email" />
			</div>
		  <div >
            <input placeholder="Username" />
			</div>
			<div>
			<input placeholder="Password" />
			</div>
			<div>
            <button type="submit"> Register </button>
			</div>


          </form>
	</Center>
      </div>
    )
  }
}

export default Register