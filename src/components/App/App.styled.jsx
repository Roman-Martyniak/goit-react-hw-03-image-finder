import styled from 'styled-components';

export const AppBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Message = styled.p`
  color: #3f51b5;
  text-align: center;
  font-size: 30px;
`;

export const MessageQuery = styled.span`
  color: red;
`;
