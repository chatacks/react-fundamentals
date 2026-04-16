import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinLineIcon,
  MoneyIcon,
  TrashIcon
} from '@phosphor-icons/react';

import {
  CheckoutContainer,
  FinishedButton,
  FormContainer,
  Input,
  PaymentButton,
  PaymentContainer,
  RemoveButton,
  SelectedCoffeeCardContainer,
  SelectedCoffeesContainer,
  Separator,
  Wrapper
} from './styles';

import coffeeImage from '../../assets/expresso.svg';
import { InputCoffeeCard } from '../../components/InputCoffeeCard';
import { useNavigate } from 'react-router';

export function Checkout() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate('/success');

  return (
    <CheckoutContainer as="main">
      <div>
        <h3>Complete seu pedido</h3>
        <FormContainer>
          <div>
            <span>
              <MapPinLineIcon size={22}/>
            </span>
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <form>
            <Input $half placeholder="CEP"/>
            <Input placeholder="Rua"/>
            <div>
              <Input $half placeholder="Número"/>

              <Wrapper>
                <Input $hasBadge placeholder="Complemento"/>
                <span>Opcional</span>
              </Wrapper>
            </div>

            <div>
              <Input $half placeholder="Bairro"/>
              <Input placeholder="Cidade"/>
              <Input placeholder="UF"/>
            </div>
          </form>
        </FormContainer>

        <PaymentContainer>
          <div>
            <span>
              <CurrencyDollarIcon size={22}/>
            </span>
            <div>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div>
            <PaymentButton>
              <span>
                <CreditCardIcon size={16} />
              </span>
              cartão de crédito
            </PaymentButton>

            <PaymentButton>
              <span>
                <BankIcon size={16} />
              </span>
              cartão de dévito
            </PaymentButton>

            <PaymentButton>
              <span>
                <MoneyIcon size={16} />
              </span>
              dinheiro
            </PaymentButton>
          </div>
        </PaymentContainer>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
        <SelectedCoffeesContainer>
          <SelectedCoffeeCardContainer>
            <div>
              <img src={coffeeImage} alt="" />

              <div>
                <p>Expresso Tradicional</p>

                <div>
                  <InputCoffeeCard />
                  <RemoveButton>
                    <span>
                      <TrashIcon size={16} />
                    </span>
                    remover
                  </RemoveButton>
                </div>
              </div>

              <p>
                R$ {' '} 9,90
              </p>
            </div>
            <Separator />
          </SelectedCoffeeCardContainer>

          <div>
            <div>
              <p>Total de itens </p>
              <span>R$ {' '} 29,70</span>
            </div>
            <div>
              <p>Entrega </p>
              <span>R$ {' '} 3,50</span>
            </div>
            <div>
              <p>Total </p>
              <span>R$ {' '} 33,20</span>
            </div>
          </div>

          <FinishedButton onClick={handleNavigate}>
            confirmar pedido
          </FinishedButton>
        </SelectedCoffeesContainer>
      </div>
    </CheckoutContainer>
  );
}
