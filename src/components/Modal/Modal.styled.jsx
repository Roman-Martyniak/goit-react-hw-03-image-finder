import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const ModalBox = styled.div`
  width: 1000px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 560px;
  object-fit: contain;
`;
