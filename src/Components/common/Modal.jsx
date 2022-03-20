import styled from '@emotion/styled';

const ModalContent = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  width: 50%;
  transform: translateY(-250px);
  transition: all 0.6s;

  @media screen and(max-width: 900px) {
    width: 80%;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default ModalContent