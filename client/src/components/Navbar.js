import React, {Component} from "react";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper grey darken-4">
                    <div className="container">
                    <div className="brand-logo center">Employee Directory</div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;