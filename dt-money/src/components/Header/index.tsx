import { HeaderContainer, HeaderContent } from './styles';
import igniteLogo from '../../assets/ignite-simbol.svg';
import { Button } from '../Button';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={igniteLogo} alt="" />
          <h1>DT Money</h1>
        </div>

        <Button>Nova transação</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
