import { useDispatch } from "react-redux";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { ReactComponent as PlayIcon } from '../../svgs/playIcon.svg'
import { addListImg, addListName, addPlayListId } from '../../features/playList/playlistSlice'

function MiniCardPlay({playlist}) {
  const dispatch = useDispatch();
  const onClick = (playlist) =>{
    dispatch(addListImg(playlist.img))
    dispatch(addListName(playlist.name));
    dispatch(addPlayListId(playlist.list_id));
  }

  return (
    <Link to={`playlist/${playlist.name}`} css={css`text-decoration: none; color:#FFFFFF;`} onClick={(e) => onClick(playlist)}>
      <div className="card-wrapper">
        <StyleCard>
          <StyleCardImg>
            <img alt="Card.img" src={playlist.img}/>
          </StyleCardImg>
          <StyleCardContent>
            <h3 css={css`width:190px;`}>{playlist.name}</h3>
          </StyleCardContent>
          <StyleIcon className="play-icon">
            <PlayIcon />
          </StyleIcon>
        </StyleCard>
      </div>
    </Link>
  )
}

const StyleCard = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 320px;
  position: relative;
  cursor: pointer;
  background: #3c4347;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    background: #282828;
    transition: 180ms background ease-in-out;
    .play-icon{
      opacity: 1;
      transition: 180ms opacity ease-in-out;
    }
  }
`;

const StyleCardImg = styled.div`
  height: 90px;
  width: 90px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyleCardContent = styled.div`
  display: flex;
  margin-top: 8px;
  & h3 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-left: 20px;
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
  right:15px;
  bottom: 25px;
  & svg {
    margin: auto;
    height: 15px;
    width: 15px
  }
`;

export default MiniCardPlay;