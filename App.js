import React, { Component } from 'react';
import './App.css';
import Sana from './photos/sana.jpg';
import Anna from './photos/anna.jpg';
import Jessica from './photos/jessica.jpg';
import Pers from './components/personne';
import { Button } from 'reactstrap';
const com1={photo:Sana, name:"Sana", comment:" snawita" ,id:1};
const com2={photo:Anna, name:"Anna", comment:"mezyena barcha ",id:2};
const com3={photo:Jessica, name:"Jessica", comment:"ooo bella ",id:3};

class App extends Component {
  constructor(props){
 super(props);
 this.state={
   per:[com1, com2, com3],
   currentPerson:com1.id
 };
  }
  change=(id)=>{
    this.setState({currentPerson:id})
  }
  render() {
    
    return (
  <div className="App">
 {this.state.per.map((x)=>{return(
   <Button onClick={()=>this.change(x.id)}>{x.name}</Button>
 )})}
 {this.state.per.filter(x=>x.id===this.state.currentPerson).map((x)=>{return(<Pers photo={x.photo} name={x.name} comment={x.comment}/>
 )})}
     
      </div>
    );
  }
}

export default App;
