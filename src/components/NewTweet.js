import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
		state = { 
			text: '',
			toHome: false,
	}

	handleChange = (event) => {
		const text = event.target.value

		this.setState(() => ({
			text
		}))

	}

	handleSubmit = (event) => {
		event.preventDefault()

		const { text } = this.state
		const { dispatch, id } = this.props

		dispatch(handleAddTweet(text, id))

		this.setState(() => ({
			text: '', 
			toHome: id ? false : true,
		}))
	}

	render(){
		const {text, toHome} = this.state
		if (toHome === true) {
			return <Redirect to='/' />
		}
		const tweetRemaining = 280 - text.length
		return (
			<div>
				<h3 className='center'>Compose New Tweet</h3>
				<form className='new-tweet' onSubmit={this.handleSubmit} >
					<textarea 
						placeholder= "What's happening?"
						value={text}
						onChange={this.handleChange}
						className='textarea'
						maxLength={280}
					></textarea>
					{tweetRemaining <= 100 && (
						<div className='tweet-length'>
							{tweetRemaining}
						</div>
					)}
					<button
						className='btn'
						type= 'submit'
						disabled={text === ''}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(NewTweet)