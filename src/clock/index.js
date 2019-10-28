import React, {Component} from 'react'

class Clock extends Component{
	render () {
		console.log("Clock render")
		let {onWackup,onSleep,time} = this.props;
		
		if (time === 9) {
			onWackup();
		}
		if (time === 21) {
			onSleep();
		}
		return (
		<div>
			Clock
		</div>
		)
	}
	
	componentDidMount() {
		console.log("Clock mount")
	}
	
	componentWillUpdate() {
		console.log('Clock will update')
	}
	
	componentDidUpdate() {
		console.log("Clock update")
	}
	
	componentWillUnmount() {
		console.log("Clock unmount")
	}
}

export default Clock