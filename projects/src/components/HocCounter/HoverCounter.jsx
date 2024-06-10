import withCounter from './withCounter';

function HoverCounter(props)
{
    let {count, setCounter} = props;
    return(
        <div>
            <h1 onMouseOver={()=>{setCounter(prev => prev+1)}}>Count {count}</h1>
        </div>
    )
}

export default withCounter(HoverCounter);