import withCounter from './withCounter';

function ClickCounter(props)
{
    let {count, setCounter} = props;
    return(
        <div>
            <button onClick={()=>{setCounter(prev => prev+1)}}>Counter {count}</button>
        </div>
    )
}

export default withCounter(ClickCounter);