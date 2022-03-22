import styled from '@emotion/styled';

export const MovieGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 3rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
