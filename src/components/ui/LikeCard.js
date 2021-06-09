import styled from "@emotion/styled";
import { ReactComponent as PlayIcon } from '../../svgs/playIcon.svg'

export default function LikeCard() {
  return (
      <StyleCard>
        <StyleSongList>
          <span>Mis canciones</span>
        </StyleSongList>
        <StyleCardContent>
          <h3>Canciones que te gustan</h3>
          <span>15 canciones que te gustan</span>
        </StyleCardContent>
        <StyleIcon className="play-icon">
          <PlayIcon />
        </StyleIcon>
      </StyleCard>
  )
}

const StyleCard = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background: #582df1;
  color: #fff;
  background-image: linear-gradient(to bottom right, #582df1, #7057ec);
  border-radius: 8px;
  padding: 1.2rem;
  height: 300px;
  width: 450px;
  position: relative;
  cursor: pointer;
  &:hover {
    transition: 180ms background ease-in-out;
    .play-icon{
      opacity: 1;
      transition: 180ms opacity ease-in-out;
    }
  }
`;

const StyleSongList = styled.div`
  height: 100px;
  font-size: 1.2rem;
  padding: 20px 0;
  margin-top: 30px;
`;

const StyleCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding: 0.4rem 0;
  & h3 {
    font-weight: 600;
    font-size: 1.8rem;
    margin-bottom: 0;
    letter-spacing: 0.6px;
  }
  span {
    margin-top: 8px;
    font-size: 1rem;
    color: #b3b3b3;
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
  bottom: 1.7rem;
  & svg {
    margin: auto;
    height: 15px;
    width: 15px
  }
`;