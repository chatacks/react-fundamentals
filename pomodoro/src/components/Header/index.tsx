import { HeaderContainer } from './styles';
import igniteLogo from '../../assets/ignite-simbol.svg';
import { ScrollIcon, TimerIcon } from '@phosphor-icons/react';
import { NavLink } from 'react-router';

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <TimerIcon size={24}/>
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <ScrollIcon size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
