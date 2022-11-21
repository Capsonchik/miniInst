import styled from 'styled-components';

export const StyledCard = styled.div`
  border: 1px solid #bbb7b7;
  overflow: auto;
  border-radius: 20px;
  width: 250px;
  height: 340px;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .info {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .description {
    padding: 5px;
  }

  .icon {
    color: #b0acac;
    font-size: 20px;
    
    &:first-child {
      margin-right: 10px;
    }
  }
  
  .red {
    color: indianred;
    font-size: 20px;
    margin-right: 10px;
  }
  
  .block {
    display: none;
  }
`