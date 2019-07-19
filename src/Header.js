import React, {Component} from "react"
import { Container, Navbar, Button, Image } from "react-bootstrap"

class Header extends Component {
    render(){
        return(
            <header>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt=""/>
                <h1>MEME GENERATOR</h1>
            </header>
        )
    }
}

export default Header