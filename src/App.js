import React from "react";
import'./App.css'
class App extends React.Component {
  state = {
    Person :{ fullName:"Cristiano Ronaldo",bio:"doesn't matter",
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg",
    profession:"football player"}
    ,Shows:true
    ,Counter:0
  };

componentDidMount() { setInterval(()=>this.setState({Counter:this.state.Counter+1}) , 1000) }

  handleClick=()=>this.setState({Shows:!this.state.Shows})
  render() {

    return  <>
    <button onClick={this.handleClick}> shows</button>
    <h1 style={{fontSize:12}}> Interval: {this.state.Counter}</h1>
    {this.state.Shows && 
    
    <div className="block">
    
    <h1 style={{fontSize:12}}> Name : {this.state.Person.fullName}</h1>
    <h1 style={{fontSize:12}}>Bio:  {this.state.Person.bio}</h1>
    <h1 style={{fontSize:12}}>Profession:  {this.state.Person.profession}</h1>
    <img style={{width:200,height:200}} src={this.state.Person.imgSrc} alt=""/>
    

    

    
    </div>}
    </> 
   
   
  }
}
 
export default App;

