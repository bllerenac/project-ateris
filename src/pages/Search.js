import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch} from "../features/search/searchSlice";
import styled from "@emotion/styled";
import Iframe from "react-iframe";
import HeaderSearch from "../components/contents/Headers/HeaderSearch";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-grow : 1;
  flex-direction: column;
`;

const StyledContent = styled.div`
  width: 100vw;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
`;

const InputContent = styled.div`
  background-color: aliceblue;
  height: 100px;
`;

function Search() {

  const [query, setQuery] = useState("trend");
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.search.list);
  console.log(videos)

const handleSubmit = (e) => {
  e.preventDefault();
  let timerID;
  return () => clearTimeout(timerID);;
};

//useEffect(()=>{
// let timerID;
//  console.log(query)
//  const fetchQ = dispatch(fetchSearch(query));
//  if (query !==""){
//    timerID = setTimeout(fetchQ, 2000);
//  }
//  return () => clearTimeout(timerID);
//},[query]);

  return (
    <StyledDiv>
        <ContentDiv>
          <InputContent>
          <form id="search" onSubmit={handleSubmit}>
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </form>
            <button type="submit" form="search" >Search</button>
            <HeaderSearch type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          </InputContent>
          <StyledContent>
            {(!videos) ? <div> red</div> :(videos.items.map(item => <Iframe width="200" height="150" url={`http://www.youtube.com/embed/${item.id.videoId}`} /> ))  // <div> blue</div> 
            }
          </StyledContent>
        </ContentDiv>
    </StyledDiv>
  )
}

export  default Search;
