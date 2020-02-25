import React, { Component } from 'react'
import {updateBreadcrumb} from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
class IndividualTaxPayers extends Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
    }
    componentDidMount =()=> {
        this.dispatch(updateBreadcrumb({parent:"Individual Taxpayers"}))
    }
    render() {
        return (
            <div>
                <h1>im Individual TaxPayers</h1>
            </div>
        )
    }
}

export default connect()(IndividualTaxPayers)
