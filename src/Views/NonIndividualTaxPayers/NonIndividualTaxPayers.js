import React, { Component } from 'react'
import {updateBreadcrumb} from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';

class NonIndividualTaxPayers extends Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
    }
    componentDidMount =()=> {
        this.dispatch(updateBreadcrumb({parent:"Non IndividualTaxpayers"}))
    }
    render() {
        return (
            <div>
                <h1>I am the non individual tax payers</h1>
            </div>
        )
    }
}

export default connect()(NonIndividualTaxPayers)
