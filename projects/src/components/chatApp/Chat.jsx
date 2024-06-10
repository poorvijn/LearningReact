import useOnline from './useOnline'

function Chat()
{
    const isOnline = useOnline(4000);
    return<>
        {isOnline?<h3>Available for chat!</h3>:<h3>Unavailable for chat</h3>}
    </>
}

export default Chat