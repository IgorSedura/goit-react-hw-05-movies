import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  align-items: flex-start;
`;

export const SearchFormButton = styled.button`
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
  min-height: 48px;
  min-width: 0;
  outline: none;

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
    /* box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px; */
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
export const SearchFormLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  width: 200px;

  height: 48px;
  font-size: 18px;
  bottom: 14px;
  right: 9px;
  border-radius: 5px;
  width: 400px;
  box-sizing: border-box;
  padding: 0 18px;

  margin-bottom: 10px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
