import Icons from '../Icons'

function PlayPauseRender(status){
    if(status === "1"){
      return(<>
        <img alt="play_filled.svg" src={Icons.play_filled} className="play hide"/>
        <img alt="pause.svg" className="pause" src={Icons.stop}/>
      </>)
    }else{
      return(<>
        <img alt="play_filled.svg" src={Icons.play_filled} className="play"/>
        <img alt="pause.svg" className="pause hide" src={Icons.stop}/>
      </>)
    }
}

export default PlayPauseRender;