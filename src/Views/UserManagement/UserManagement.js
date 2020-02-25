import React, { Component } from 'react'
import {updateBreadcrumb} from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';

class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
    }
    componentDidMount =()=> {
        this.dispatch(updateBreadcrumb({parent:"User Management"}))
    }
    render() {
        return (
            <div>
            <h1>I'm the user management</h1> 
            </div>
        )
    }
}

export default connect()(UserManagement)
