import styled from '@emotion/styled';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkStyled = styled(Link)`
  padding: 5px 0;
  font-weight: 700;
  position: relative;
  font-size: 1.5rem;

  @media screen and (max-width: 600px ){
    font-size:14px ;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    transition: width 0.5s ease;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;

function HeaderNav({ item }) {
  const location = useLocation();
  const active = location.pathname === item.path;

  return (
    <LinkStyled className={`${active ? 'active' : ''} `} to={item.path}>
      {item.title}
    </LinkStyled>
  );
}

export default HeaderNav;
