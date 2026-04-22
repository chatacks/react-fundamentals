import { BankIcon, CreditCardIcon, CurrencyDollarIcon, MapPinLineIcon, MoneyIcon } from '@phosphor-icons/react';
import { ContainerInputs, Error, FinishedButton, FormContainer, Input, Label, PaymentContainer, SelectedCoffeesContainer, Wrapper } from './styles';
import { SelectedCoffees } from '../SelectedCoffees';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CoffeesContext } from '../../../../context';


const VALID_PAYMENTS = ['credito', 'debito', 'dinheiro'] as const;

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-\d{3}$/, 'CEP inválido. Use o formato 00000-000'),
  street: zod.string().min(3, 'Informe a sua rua'),
  number: zod.string().min(3, 'Informe o número da sua casa'),
  additional: zod.string().optional(),
  neighborhood: zod.string().min(3, 'Informe o seu bairro'),
  city: zod.string().min(3, 'Informe sua cidade'),
  state: zod.string().min(2, 'Informe seu estado'),
  payment: zod.enum(VALID_PAYMENTS, {
    error: 'Por favor, selecione uma opção de pagamento'
  })
});

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function CheckoutForm() {
  const { newOrder } = useContext(CoffeesContext);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      additional: '',
      city: '',
      neighborhood: '',
      state: '',
    }
  });

  const handleCreateNewOrder = (data: NewOrderFormData) => {
    newOrder(data);
    navigate('/success');
    reset();
  };

  const payment = watch('payment');
  const isSubmitDisabled = !payment;

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewOrder)} as="form">
      <div>
        <h3>Complete seu pedido</h3>
        <ContainerInputs>
          <div>
            <span>
              <MapPinLineIcon size={22}/>
            </span>
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <Input
            $half
            placeholder="CEP"
            {...register('cep')}
          />

          {errors.cep?.message && (
            <Error $error>
              {errors.cep.message}
            </Error>
          )}

          <Input
            placeholder="Rua"
            {...register('street')}
          />

          {errors.street?.message && (
            <Error $error>
              {errors.street.message}
            </Error>
          )}

          <div>
            <Input
              $half
              placeholder="Número"
              {...register('number')}
            />

            <Wrapper>
              <Input
                $hasBadge

                placeholder="Complemento"
                {...register('additional')}
              />
              <span>Opcional</span>
            </Wrapper>
          </div>

          <div>
            <Input
              $half
              placeholder="Bairro"
              {...register('neighborhood')}
            />

            <Input
              placeholder="Cidade"
              {...register('city')}
            />
            <Input
              placeholder="UF"
              {...register('state')}
            />
          </div>
        </ContainerInputs>

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
            <Label as="label" htmlFor="credito">
              <input
                id="credito"
                type="radio"
                value="credito"
                {...register('payment')}
              />
              <span>
                <BankIcon size={16} />
              </span>
              cartão de débito
            </Label>

            <Label as="label" htmlFor="debito">
              <input
                id="debito"
                type="radio"
                value="debito"
                {...register('payment')}
              />
              <span>
                <CreditCardIcon size={16} />
              </span>
              cartão de crédito
            </Label>

            <Label as="label" htmlFor="dinheiro">
              <input
                id="dinheiro"
                type="radio"
                value="dinheiro"
                {...register('payment')}
              />
              <span>
                <MoneyIcon size={16} />
              </span>
              dinheiro
            </Label>
          </div>

        </PaymentContainer>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
        <SelectedCoffeesContainer>
          <SelectedCoffees />

          <FinishedButton
            disabled={isSubmitDisabled}
          >
            confirmar pedido
          </FinishedButton>
        </SelectedCoffeesContainer>
      </div>
    </FormContainer>
  );
}
