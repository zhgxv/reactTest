import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Filter from "./filter"

class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
			name:"reactTest"
		}
	}
	
	render () {
		console.log("App render")
		return (
		<div>
			{this.state.name}
			{this.state.name && <Filter name={this.state.name} />}
		</div>
		)
	}
	
	componentDidMount() {
		window.App = this
		console.log("App mount")
	}
	
	componentWillUpdate() {
		console.log('App will update')
	}
	
	componentDidUpdate() {
		console.log("App updated")
	}
	
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
