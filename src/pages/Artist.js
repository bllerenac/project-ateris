import styled from "@emotion/styled";
import HeaderLibrary from "../components/contents/Headers/HeaderLibrary";
import ArtistCard from "../components/ui/ArtistCard"

const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: #121212;
`;

const PlayListContent = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );
    gap: 10px;
    width: 100%;
    height: auto;
    
`;

const dataPlaylists = [
  {
    id: 101,
    category_id: 3,
    name: 'Home playlist 1',
    img:
      'https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 102,
    category_id: 3,
    name: 'Home playlist 2',
    img:
      'https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 103,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 104,
    category_id: 1,
    name: 'Focus playlist 1',
    img:
      'https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 105,
    category_id: 4,
    name: 'Sunday playist',
    img:
      'https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 106,
    category_id: 2,
    name: 'Mood playist 1 ',
    img:
      'https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 107,
    category_id: 2,
    name: 'Mood playist 2',
    img:
      'https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    desc: 'Lorem ipsum',
  },
]

function Artist (){
    return(
        <StyledDiv>
            <HeaderLibrary/>
            <PlayListContent>
                {dataPlaylists.map((playlist) => (
                  <ArtistCard playlist_data={playlist} />
                ))}
            </PlayListContent>
        </StyledDiv>
    );
}

export default Artist;