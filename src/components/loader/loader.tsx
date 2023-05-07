import styled, { keyframes } from "styled-components";

const Loader = () => (
  <FallbackSpinner>
    <DimmedBackground />
    <Loading>
      <LdsRing>
        <LdsRingDiv></LdsRingDiv>
        <LdsRingDiv></LdsRingDiv>
        <LdsRingDiv></LdsRingDiv>
        <LdsRingDiv></LdsRingDiv>
      </LdsRing>
    </Loading>
  </FallbackSpinner>
);

export default Loader;

const FallbackSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Loading = styled.div`
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  border: 3px solid transparent;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
`;

const LdsRingDiv = styled.div`
  display: block;
  position: absolute;
  width: 6.4rem;
  height: 6.4rem;
  margin: 0.8rem;
  border: 0.8rem solid #fff;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #333 transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const DimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
