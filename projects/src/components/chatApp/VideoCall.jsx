import useOnline from './useOnline'

function VideoCall()
{
    const isOnline = useOnline(2000);
    return<>
        {isOnline?<h3>Available for video call!</h3>:<h3>Unavailable for video call</h3>}
    </>
}

export default VideoCall;