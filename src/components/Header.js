import {Component} from 'react'

//class function
class Header extends Component{
    render(){
        return(
        <h1>Hello i am header{this.props.data} </h1>
        
        
        )
    }
}





//function class
//function Header(props){
    //return(<h1>Hello i am header{props.data} </h1>)
//}

export default Header