import styled from "@emotion/styled";

export default styled.li`
  background: black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  width: 200px;
  height: 300px;
  text-align: left;
  img {
    height: 60%;
  }
  .info-wrap {
    display:flex;
    flex-direction:column;
    gap:5px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    color: #fff;
  }
  .description {
    font-size: 16px;
    line-height: 20px;
    color: #7d7d7d;
   }
  .followers {
    text-transform: uppercase;
    color: #7d7d7d;
  }

`;