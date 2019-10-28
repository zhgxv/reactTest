import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Filter from "./filter"
import Clock from "./clock"

class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
			name:"reactTest",
			time:12
		}
	}
	
	render () {
		console.log("App render")
		return (
		<div>
			{this.state.name}
			{this.state.name && <Filter name={this.state.name} />}
			
			<Clock  
				time={this.state.time}
				onWackup={()=>{
					alert("wake up")
				}} 
				onSleep={()=>{
					alert("sleep")
				}}
			/>
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
