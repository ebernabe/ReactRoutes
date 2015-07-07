import React from "react"
import {default as Router, Route} from "react-router"

let RouteHandler = Router.RouteHandler

class App extends React.Component{
   render(){
   			return <div>
   			<h1>App</h1>
   			<a href="#user">User</a> - <a href="#about">About</a>
   			<RouteHandler />
   			</div>

   }
}
class About extends React.Component{
	render(){
		return <p>esto es la pagina de about</p>
	}

	shouldComponentUpdate(newProps,newState){
		//for inmutable Js with React Js
		if(this.props.user === newProps.user){
				return false
		} 

		return false
	}
}

class User extends React.Component{
	render(){
		return <p>esto es la pagina de user</p>
	}
}



let routes = <Route handler={App}>
<Route path="about" handler={About} />
<Route path="user" handler={User} />
</Route>

Router.run(routes,Router.HashLocation,(Root)=>{
	React.render(<Root />,document.getElementById('container'))
})




