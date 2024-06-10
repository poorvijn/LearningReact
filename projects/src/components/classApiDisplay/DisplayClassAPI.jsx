import {Component} from "react";


class DisplayClassAPI extends Component{
    constructor(){
        super();
        this.state = {data:[]};
    }

    componentDidMount(){
        let d ="";
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            d = res.json();
            return d;
            })
        .then((d)=>{
            this.setState({data: d})
        }
        )
    }

    render(){
        return(
            <div>
                {this.state.data.length>0 && this.state.data.map((item)=>
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                </div>
                )
                }
            </div>
        )
    }
}

export default DisplayClassAPI;