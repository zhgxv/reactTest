import React, {Component} from 'react'
import InputNumber from "../inputNumber"

class Filter extends Component{
	render () {
		console.log("Filter render")
		return (
		<div>
			{this.props.name}
			{this.props.name && <InputNumber defaultValue={this.props.name}/>}
		</div>
		)
	}
	
	componentDidMount() {
		console.log("Filter mount")
	}
	
	componentWillUpdate() {
		console.log('Filter will update')
	}
	
	componentDidUpdate() {
		console.log("Filter update")
	}
	
	componentWillUnmount() {
		console.log("Filter unmount")
	}
}

export default Filter