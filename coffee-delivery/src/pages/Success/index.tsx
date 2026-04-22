import { LocalContent, OrderContainer, PaymentContent, SuccessContainer, TimeContent } from './styles';
import illustration from '../../assets/illustration.svg';
import { CurrencyDollarIcon, MapPinIcon, TimerIcon } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CoffeesContext } from '../../context';

export function Success() {
  const { order } = useContext(CoffeesContext);

  return (
    <SuccessContainer as="main">
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderContainer>
          <div>
            <LocalContent>
              <span>
                <MapPinIcon weight="fill" size={22}/>
              </span>
              <div>
                <p>
                  Entrega em <span>{order.street}, {order.number}</span>
                </p>
                <p>{order.city} - {order.state}</p>
              </div>
            </LocalContent>

            <TimeContent>
              <span>
                <TimerIcon weight="fill" size={22}/>
              </span>
              <div>
                <p>Previsão de entrega</p>
                <p>20{' '}min - 30{' '}min</p>
              </div>
            </TimeContent>

            <PaymentContent>
              <span>
                <CurrencyDollarIcon size={22}/>
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  {order.payment === 'credito' && 'Cartão de Crédito'}
                  {order.payment === 'debito' && 'Cartão de Débito'}
                  {order.payment === 'dinheiro' && 'Dinheiro'}
                </p>
              </div>
            </PaymentContent>
          </div>
        </OrderContainer>
      </div>

      <img src={illustration} alt="" />
    </SuccessContainer>
  );
}
