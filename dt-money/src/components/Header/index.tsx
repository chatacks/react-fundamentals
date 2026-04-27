import { HeaderContainer, HeaderContent } from './styles';
import igniteLogo from '../../assets/ignite-simbol.svg';
import { Button } from '../Button';
import  * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={igniteLogo} alt="" />
          <h1>DT Money</h1>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Nova transação</Button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
