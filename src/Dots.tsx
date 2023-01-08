import styled, { keyframes } from "styled-components";

const hue = keyframes`
  0% {
    background-color: var(--violet);
  }
  20% {
    background-color: var(--pink);
  }
  30% {
    background-color: var(--pink); 
  }
  50% {
    background-color: var(--violet);
  }
  80% {
    background-color: var(--blue);
  }
  100% {
    background-color: var(--violet);
  }
`;

const move = keyframes`
  50% {
    transform: translate(0) scale(1);
  }
  100% {
    transform: translate(-3rem, -3rem) scale(0.1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const nbCols = 10;

const Wrapper = styled.div`
  --size: 2rem;
  --blue: hsl(-120deg 100% 70%);
  --violet: hsl(-80deg 100% 50%);
  --pink: hsl(-40deg 100% 50%);
  display: grid;
  grid-template-columns: repeat(${nbCols}, var(--size));
  grid-template-rows: repeat(${nbCols}, var(--size));
  gap: calc(var(--size) / 2);
`;

const Dot = styled.div`
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: black;
  animation: 2s ease-out var(--delay) ${fadeIn},
    4s ease-in-out var(--delay) infinite ${hue},
    2s ease-in-out var(--delay) infinite alternate ${move};
`;

const nbDots = nbCols ** 2;
const timeOffset = 50;

export default function Dots() {
  const dots: number[] = Array.from({ length: nbDots }, (_, i) => i);

  return (
    <Wrapper>
      {dots.map((dot) => (
        <Dot
          key={dot}
          style={
            {
              "--delay": `${
                (dot % nbCols) * timeOffset + (dot * timeOffset) / nbCols
              }ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </Wrapper>
  );
}
