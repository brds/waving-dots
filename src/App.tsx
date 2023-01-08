import styled from "styled-components";
import Dots from "./Dots";

export default function App() {
  return (
    <Wrapper>
      <Dots />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
`;
