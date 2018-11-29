import React ,{Component}from'react'

class Pers extends Component{
render(){
    return(
 <div className="person">
    <img src={this.props.photo} className="photo" alt=""/>
    <h2 className="name">{this.props.name}</h2>
    <h1>{this.props.comment}</h1>

</div> 
   );
}


}
export default Pers