import React, {Component} from "react";
import axios from "axios";

const Employee = props => (
    <tr>
        <td>{props.employees.employee.firstName}</td>
        <td>{props.employees.employee.lastName}</td>
        <td>{props.employees.employee.email}</td>
        <td>{props.employees.employee.position}</td>
    </tr>
)

export default class EmployeeList extends Component {
    constructor(){
        super();
        this.state = {
            employees: [],
            search: "",
            select: []
        }
    }

updateSearch(event){
    this.setState({search: event.target.value})
    console.log(event.target.value)
}
    componentDidMount(){
        axios.get("http://localhost:3001/api/employees")
        .then(res => {
            this.setState({employees: res.data})
        }).catch((error) => {
            console.log(error)
        })
    }
    removeEmployee(id){
        axios.delete("/api/employees/" + id)
        .then(res => console.log(res.data));
        this.setState({
            employees: this.state.employees.filter((_id) => id !== id)
        })
    }

    employeeList(){
            let filteredEmployee = this.state.employees.filter(
            (employee) => {
                return employee.employee.firstName.toLowerCase().indexOf(this.state.search.toLowerCase() !== -1)
                || employee.employee.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                || employee.employee.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1
                || employee.employee.position.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
            }
        )
        return filteredEmployee.map(employee => {
            return <Employee employees={employee} removeEmployee={this.removeEmployee} key={Employee._id}/>;
        })
    }
    render(){
        return (
            <div>
                <div className="container">
                    <br></br>
                    <form className="col s12">
                        <div className="col s12">
                            <input placeholder="Search Filter" id="search" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                            <label htmlFor="search">Search directory by first/last name, email, or position</label>
                        </div>
                    </form>
                <table className="responsive-table centered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.employeeList()}
                            {console.log(this.employeeList())}
                        </tbody>
                </table>
            </div>
            </div>
        )
    }
}