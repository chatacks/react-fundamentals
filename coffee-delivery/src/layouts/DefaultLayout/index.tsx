import { NavLink, Outlet } from 'react-router';
import { HeaderContainer } from './styles';

import coffeeDeliveryLogo from '../../assets/coffe-delivery-logo.svg';
import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CoffeesContext } from '../../context';

export function DefaultLayout() {
  const { orderedsCoffee } = useContext(CoffeesContext);

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

            <div>
              <NavLink to="/checkout">
                <ShoppingCartIcon weight="fill" size={22} />
                {orderedsCoffee.length > 0 && <span>{orderedsCoffee.length}</span>}
              </NavLink>
            </div>
          </div>
        </nav>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
