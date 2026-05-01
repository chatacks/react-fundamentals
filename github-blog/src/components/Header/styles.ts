import styled from 'styled-components';
import headerCover from '../../assets/header-cover.svg';

export const HeaderContainer = styled.header`
  background: url(${headerCover}) center / cover;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 18.5rem;

  width: 100%;
`;
