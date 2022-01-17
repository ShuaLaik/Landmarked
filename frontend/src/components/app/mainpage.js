import React, { Component } from 'react'
import BodyContainer from './body/body_container'
import HeaderContainer from './header_container'

export default class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <HeaderContainer />
                <BodyContainer />
            </div>
        )
    }
}
