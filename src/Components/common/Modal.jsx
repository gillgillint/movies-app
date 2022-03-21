import styled from '@emotion/styled';

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: transform 0.6s ease, opacity 0.6s ease;

  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  width: 50%;
  border-radius: 12px;

  @media screen and(max-width: 900px) {
    width: 80%;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default ModalContent;
