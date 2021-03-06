import React, { Component } from 'react'
import './index.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: '',
                description: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    clearInputs() {
        this.setState({
            inputs: {
                title: '',
                description: ''
            }
        })
    }

    handleSubmit(e) {
        let { add, id } = this.props;
        e.preventDefault();
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        }
        else {
            this.props.submit(this.state.inputs, id)
        }
    }

    render() {
        let { title, description } = this.state.inputs;
        let formStyle = {
            height: "350px",
            width: "1200px",            
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            margin: "20px auto",
            backgroundColor: "lightblue"
        }
        let titleStyle = {
            height: "30px",
            width: "600px",
        }
        let descriptionStyle = {
            height: "150px",
            width: "600px",
        }
        return (
            <form className="politicalForm" onSubmit={this.handleSubmit} style={formStyle}>
                <p>Post political issues here</p>
                <input style={titleStyle} type="text" onChange={this.handleChange} placeholder="Title" name="title" value={title} />
                <textarea style={descriptionStyle} type="text" onChange={this.handleChange} placeholder="Description" name="description" value={description} />
                <button className='submit' type='submit'>SUBMIT</button>
            </form>
        )
    }
}


