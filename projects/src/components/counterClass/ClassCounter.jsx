import { Component } from "react";

class Counter extends Component
{
    constructor()
    {
        super();
        this.state={count:1};
    }

    incrementCount = ()=>{
        this.setState({count:this.state.count+1});
    }

    decrementCount = ()=>{
        this.setState({count: this.state.count-1});
    }

    componentWillUnmount(){
        alert("Counter will disappear")
    }
    
    render(){
        return(<div>                    
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>Increment Count</button>
                <button onClick={this.decrementCount}>Decrement Count</button>
                </div>)
    }
}

class Main extends Component
{
    constructor()
    {
        super();
        this.state={show:true};
    }

    toggleCounter = ()=>{
        this.setState({show: !this.state.show});
    }

    render(){
        return(
            <>
                {this.state.show && <Counter/>}
                <button onClick={this.toggleCounter}>Toggle counter</button>
            </>
        )
    }
}

export default Main;