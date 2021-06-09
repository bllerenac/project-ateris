import {setStatusSong, addSongId} from '../features/player/playerSlice'

function ChangeSongId (dispatch, song_id, video_id){
  if(song_id !== video_id){
    dispatch(addSongId(video_id))
  }
}

function ChangeSongStatus (dispatch, song_status) {
  if(song_status === "1"){
    dispatch(setStatusSong("2"))
  }else{
    dispatch(setStatusSong("1"))
  }
}

function DateFormat(date){
  const mydate = new Date(date);
  const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][mydate.getMonth()];
  const str = mydate.getDate() + ' de ' + month + ' del ' + mydate.getFullYear();
  return str;
}

const ChangeColorHeart = (e) =>{
  const svg = e.currentTarget;
  const heart = svg.querySelector(".heart");
  const fill_heart = svg.querySelector(".fill_heart")
  svg.classList.toggle("svg_select")
  heart.classList.toggle("hide")
  fill_heart.classList.toggle("hide")
}

export {ChangeSongId, ChangeSongStatus, DateFormat, ChangeColorHeart};  