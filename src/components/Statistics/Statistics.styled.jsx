import styled from 'styled-components';


export const StatisticsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 30px;
`;

export const StatisticsItem = styled.li`
      display: flex;
      flex-basis: calc((100%-60px)/4);
      flex-direction: column;
      row-gap: 15px;
      padding: 15px;
      box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
      background-color: #f787b4;
      
      border-radius: 10px;

     text-transform: uppercase;
     align-items: center;
     text-align: center;
    .stat__title {
      color: black;
      font-size: 16px;
      font-weight: 800;
      flex-grow: 1;
    }

    .stat__value {
      color: #fde7f0;
      font-size: 30px;
      font-weight: 800;
    }
`;
