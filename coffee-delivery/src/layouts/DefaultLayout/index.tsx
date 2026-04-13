import { NavLink, Outlet } from 'react-router';
import { HeaderContainer } from './styles';

import coffeeDeliveryLogo from '../../assets/coffe-delivery-logo.svg';
import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <nav>
          <NavLink to="/">
            <img src={coffeeDeliveryLogo} alt="" />
          </NavLink>

          <div>
            <div>
              <MapPinIcon weight="fill" size={22} />
              <span>Rio de Janeiro, RJ</span>
            </div>

            <NavLink to="/checkout">
              <ShoppingCartIcon weight="fill" size={22} />
            </NavLink>
          </div>
        </nav>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
