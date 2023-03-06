import styled from 'styled-components';

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

export const ActorItem = styled.li`
  flex-basis: calc((100% - 100px) / 6);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
`;
export const Img = styled.img``;
