import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackButton = styled(Link)`
  appearance: none;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 20px;
  min-width: 80px;
  outline: none;
  margin-bottom: 10px;

  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  margin-left: 10px;

  :disabled {
    pointer-events: none;
  }

  :hover {
    color: #fff;
    background-color: orangered;
  }
`;
