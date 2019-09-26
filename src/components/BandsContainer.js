import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {

	handleChange = (event) => {
		this.setState = ({
			text: event.target.text
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addBand(this.state)
	}

	render() {
		return(
			<div>
				<form>
					<input type="text" onChange={this.handleChange} value={this.state.text}>
					<input type="submit" onSubmit={ (event) => this.handleSubmit(event) >
				</form>
			</div>
			)
	}

}