import React, { Component }  from 'react'

class LikeCounter extends Component {
	constructor() {
		super()
		this.handleCounter = this.handleCounter.bind(this)
		this.state = {
			counter: 0
		}
	}
	handleCounter () {
		let { counter } = this.state
		counter = counter + 1
		this.setState({
			counter
		})
	}
	render() {
		return (
			<div name="likeCounter" >
				<span>Likes {this.state.counter}</span>
				<button onClick={this.handleCounter} >Like</button>
			</div>
		)
	}
}
export default LikeCounter