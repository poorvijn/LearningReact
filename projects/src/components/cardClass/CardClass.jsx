import {Component} from "react";

class CardClass extends Component
{
    constructor()
    {
        super();
        this.state = {contact: {
            name:"Poorvi",
            age: 20,
            openToWork:true
        }}
    }

    handleClick = ()=>{
        // you are reassigning the object
        this.setState(prevState=>({contact:{...prevState.contact,openToWork:false}}))
    }

    render(){
        return(
            <div>
                <p>{this.state.contact.name}</p>
                <p>{this.state.contact.age}</p>
                <p>{this.state.contact.openToWork && <span>Open to work</span>}</p>
                <button onClick={this.handleClick}>Not open to work? Click here</button>
            </div>
        )
    }
}

export default CardClass;