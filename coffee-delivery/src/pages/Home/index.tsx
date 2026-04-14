import { Badge, ButtonCardShopp, CardContainer, CardContent, ImageContainer, MainContainer, SectionContainer } from './styles';
import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from '@phosphor-icons/react';
import coffeeDeliveryImage from '../../assets/coffee-delivery.svg';
import expresso from '../../assets/expresso.svg';
import { InputCoffeeCard } from './components/InputCoffeeCard';

export function Home() {
  return (
    <>
      <SectionContainer as="section">
        <div>
          <div>
            <div>
              <h1>
                Encontre o café perfeito <br />
                para qualquer hora do dia
              </h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a <br />qualquer hora
              </p>
            </div>

            <div>
              <div>
                <span>
                  <ShoppingCartIcon weight='fill' size={22}/>
                </span>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <span>
                  <PackageIcon weight='fill' size={22}/>
                </span>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <span>
                  <TimerIcon weight='fill' size={22}/>
                </span>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <span>
                  <CoffeeIcon weight='fill' size={22}/>
                </span>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>

          <ImageContainer>
            <img src={coffeeDeliveryImage} alt="" />
          </ImageContainer>
        </div>
      </SectionContainer>

      <MainContainer as="main">
        <div>
          <h2>Nossos Cafés</h2>

          <CardContainer>
            <div>
              <img src={expresso} alt="" />
            </div>

            <Badge>Tradicional</Badge>

            <CardContent>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </CardContent>

            <div>
              <p>
                R$<span>9,90</span>
              </p>
              <div>
                <InputCoffeeCard />
                <ButtonCardShopp>
                  <ShoppingCartIcon weight="fill" size={22} />
                </ButtonCardShopp>
              </div>
            </div>
          </CardContainer>

        </div>


      </MainContainer>
    </>
  );
}
