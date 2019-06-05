import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const CustomerRoute = (props) => {
    const { component: Component, user, ...rest } = props
    return (
        <Route {...rest} render={(props) => (
            (user.status === "true" && user.role === "customer") ? <Component {...props} /> : <Redirect to='/' />
        )} />
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(CustomerRoute)