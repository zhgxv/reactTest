import React, {Component} from 'react'

class InputNumber extends Component{
	render () {
		console.log("InputNumber render")
		return (
			<div>
				<input type="text" placeholder={this.props.defaultValue} value={this.props.value} />
			</div>
		)
	}
	
	componentDidMount() {
		console.log("InputNumber mount")
	}
	
	componentWillUpdate() {
		console.log('InputNumber will update')
	}
	
	componentDidUpdate() {
		console.log("InputNumber update")
	}
	
	componentWillUnmount() {
		console.log("InputNumber unmount")
	}
}

export default InputNumber