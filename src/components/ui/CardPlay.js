import { useDispatch } from "react-redux";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { ReactComponent as PlayIcon } from '../../svgs/playIcon.svg'
import { addListImg, addListName, addPlayListId } from '../../features/playList/playlistSlice'

export default function CardPlay({playlist_data, link_to}) {
  const dispatch = useDispatch();
  const onClick = (playlist) =>{
    dispatch(addListImg(playlist.img))
    dispatch(addListName(playlist.name));
    dispatch(addPlayListId(playlist.list_id));
  }
  return (
    <Link to={`playlist/${playlist_data.name}`} css={css`text-decoration: none; color:#FFFFFF;`} onClick={(e) => onClick(playlist_data)}>
      <div className="card-wrapper">
        <StyleCard>
          <StyleCardImg>
            <img alt="card.img" src={playlist_data.img}/>
          </StyleCardImg>
          <StyleCardContent>
            <h3>{playlist_data.name}</h3>
            <span>{playlist_data.desc}</span>
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

const StyleCardImg = styled.div`
  height: 160px;
  width: 210px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyleCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding: 0.4rem 0;
  & h3 {
    font-weight: 600;
    font-size: 1.2rem;
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
  right: 30px;
  bottom: 130px;
  & svg {
    margin: auto;
    height: 15px;
    width: 15px
  }
`;