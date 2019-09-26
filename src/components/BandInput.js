import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

	state = {
		name: 
	}

	handleChange = (event) => {
		this.setState = ({
			name: event.target.text
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
					<input type="text" onChange={this.handleChange} value={this.state.name}>
					<input type="submit" onSubmit={ (event) => this.handleSubmit(event)}>
				</form>
			</div>
			)
	}

}
const mapDispatchToProps = dispatch => {
	return {
		addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
	}
}
export default connect(null, mapDispatchToProps)(CreateTodo)