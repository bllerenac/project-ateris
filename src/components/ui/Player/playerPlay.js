import { BiPlayCircle, BiPauseCircle } from 'react-icons/bi';

function PlayPauseRender(status){
    if(status === "1"){
      return(<>
        <BiPauseCircle color='white' size='35px' fontWeight='100' className="pause"/>
      </>)
    }else{
      return(
        <BiPlayCircle color='white' size='35px' fontWeight='100' className="play"/>
      )
    }
}

export default PlayPauseRender;