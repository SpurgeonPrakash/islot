import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Header extends Component{
    render(){
        return (
            <div>
            <ul>
                <li><Link to={"/"}>SignIn</Link></li>
                <li><Link to={"/adminsignin"}>Admin SignIn</Link></li>
                <li><Link to={"/interviewersignin"}>Interviewer SignUp</Link></li>
            </ul>
            </div>
        );
    }
}