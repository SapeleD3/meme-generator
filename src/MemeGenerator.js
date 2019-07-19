import React, {Component} from "react"
import {Form, Row, Col} from "react-bootstrap"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
         .then(Response => Response.json())
         .then(response => {
             const {memes} = response.data
             this.setState({
                 allMemeImg: memes
             })
         })
    }

    handleChange(event) {
        const {name, value,} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randomMemeImg = this.state.allMemeImg[randNum].url
        this.setState({
            randomImage: randomMemeImg
        })
    }

    render()
    {
        return(
            <div  className="container">
                <Form onSubmit={this.handleSubmit}>
                    <input 
                    className="input"
                    type="text" 
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    onChange={this.handleChange}
                    
                    />
                    <input 
                    className="input"
                    type="text" 
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    />
                    <button 
                    onClick={this.handleSubmit}
                    >Gen</button>
                </Form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h1 className="top">{this.state.topText}</h1>
                    <h1 className="bottom">{this.state.bottomText}</h1>
                </div>
            </div>
        )
    }
}

export default MemeGenerator