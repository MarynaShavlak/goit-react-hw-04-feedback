import styled from 'styled-components';


export const OptionsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  column-gap: 30px;
`;

export const OptionItem = styled.li`
    
`;
export const OptionButton = styled.button`
  display: flex;
  column-gap: 10px;
  align-items: center;

  padding: 10px 30px;
  background-color: #fde7f0;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  transition: 250ms background-color ease-in, 250ms color ease-in;
  &:hover {
    background-color: #f787b4;
    color: white;
  }

`;

