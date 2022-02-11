import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className="Header">
                <h1 className="h1"><span>L</span>and<span>M</span>arked</h1>
                <div className="group">
                    <a href=""><img src="https://secure.gravatar.com/avatar/11598a1d430471c67b5a1787ce19feab?secure=true&size=300"/></a>
                    <a href=""><img src="https://cdn.substack.com/image/fetch/w_112,h_112,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd1ac032-322a-4237-b68a-2eb765d92ffa_745x423.jpeg"/></a>
                    <h1>Meet the Developers</h1>
                    <a href="https://ypeikes18.github.io/portfolio/"><img src="https://photos.angel.co/users/14172841-medium_jpg?1643158632"/></a>
                    <a href="https://mackzumarraga.github.io/portfolio/"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQFAfJe2G9jawg/profile-displayphoto-shrink_800_800/0/1641660318264?e=1648080000&v=beta&t=Lx4cOB6TJ1xEHbRuGsQQLseJCR8vlTZZHCibZmxquC8"/></a>
                </div>
                <div className="group">
                    <h2>{this.props.user.username}</h2>
                    <h2>⚙️</h2>
                    <button onClick={() => this.props.logout()}>Logout</button>
                </div>
            </div>
        )
    }
}
