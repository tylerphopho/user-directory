import React, {Component} from "react";
import axios from "axios";  
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class Add extends Component {
    constructor(props){
        super(props)
        this.state = {
            employee: {
                first_name: "",
                last_name: "",
                email: "",
                position: "",
            }
        };
    }
    
    handleInputeChage = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = () => {
        if(!this.state.firstName || !this.state.lastName){
            alert("Please enter a first and last name.")
        }else if (!this.state.email){
            alert("Please enter an email address.")
        }else if(!this.state.position){
            alert("Please enter a position.")
        }else{
            alert("Employee added!")
        }
        const employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            position: this.state.position
        };
        console.log(employee);
        axios.post("http://localhost:3001/api/employees", employee)
        .then(res => console.log(res.data));
    }
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, {});
          });
    }
    render() {
        return(
            <div className="container">
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><h5>Add Employee</h5></div>
                        <div className="collapsible-body">
                            <span>
                                <div className="row">
                                <form className="col s12 form">
                                    
                                    <div className="input-field col s6">
                                    <input onChange={this.handleInputeChage} value={this.state.firstName} name="firstName" type="text" className="validate"/>
                                    <label htmlFor="first_name" >First Name</label>
                                    </div>
                                    
                                    <div className="input-field col s6">
                                    <input onChange={this.handleInputeChage} value={this.state.lastName} name="lastName" type="text" className="validate"/>
                                    <label htmlFor="last_name" >Last Name</label>
                                    </div>
                                    
                                    <div className="row">
                                    <div className="col s12">

                                        <div className="input-field col s6">
                                        <input onChange={this.handleInputeChage} value={this.state.email} name="email" type="email" className="validate"/>
                                        <label htmlFor="email">Email</label>
                                        </div>
                                        
                                        <div className="input-field col s6">
                                        <input onChange={this.handleInputeChage} value={this.state.position} name="position" type="text" className="validate"/>
                                        <label htmlFor="position">Employee Positon</label>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                                </div>      
                                <button onClick={this.handleFormSubmit} className="btn waves-effect waves-light" type="submit">Add</button>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}