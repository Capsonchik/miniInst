import styled from 'styled-components';

export const StyledLoader = styled.div`
  
  .loader {
    margin-top: 100px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #6ebeff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`