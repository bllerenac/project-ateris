import styled from "@emotion/styled";
import { ReactComponent as PlayIcon } from '../../svgs/playIcon.svg'

export default function CardSong({idsong}) {
  return (
    <div className="card-wrapper">
      <StyleCard>
        {/* <StyleCardImg>
          <img src='https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'/>
        </StyleCardImg>
        <StyleCardContent>
          <h3>{name}</h3>
          <span>This is a playlist that has a variety of songs</span>
        </StyleCardContent> */}
        <iframe title="youtube_player" width="200" height="150" scr={`http://www.youtube.com/embed/${idsong}`} frameBorder="0" allowFullScreen ></iframe>
        <StyleIcon className="play-icon">
          <PlayIcon />
        </StyleIcon>
      </StyleCard>
    </div>
  )
}

const StyleCard = styled.div`
  padding: 1.2rem;
  height: 300px;
  width: 250px;
  position: relative;
  cursor: pointer;
  &:hover {
    background: #282828;
    transition: 180ms background ease-in-out;
    .play-icon{
      opacity: 1;
      transition: 180ms opacity ease-in-out;
    }
  }
`;

const StyleIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  background: #1db954;
  margin-left: auto;
  opacity: 0;
  position: absolute;
  right: 1.7rem;
  bottom: 8.3rem;
  & svg {
    margin: auto;
    height: 15px;
    width: 15px
  }
`;