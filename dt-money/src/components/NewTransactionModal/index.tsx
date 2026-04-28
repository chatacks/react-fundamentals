import  * as Dialog from '@radix-ui/react-dialog';
import * as zod from 'zod';
import { Close, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles';
import { ArrowCircleDownIcon, ArrowCircleUpIcon, XIcon } from '@phosphor-icons/react';
import { Button } from '../Button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const types =['income', 'outcome'] as const;

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(types),
});

type NewTransactionFormData = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { control, register, handleSubmit, reset, formState: {
    isSubmitting,
    errors
  } } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      description: '',
      price: 0,
      category: '',
      type: 'income'
    }
  });

  console.log(errors);

  const handleCreateNewTransaction = async (data: NewTransactionFormData) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    reset();
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>
          Nova Transação
        </Dialog.Title>
        <Close>
          <XIcon size={24} />
        </Close>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            placeholder="Descrição"
            type="text"
            {...register('description')}
          />
          <input
            placeholder="Preço"
            type="number"
            min={0}
            {...register('price', { valueAsNumber: true })}
          />
          <input
            placeholder="Categoria"
            type="text"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={onChange}
                  value={value}
                >
                  <TransactionTypeButton
                    value="income"
                  >
                    <ArrowCircleUpIcon
                      size={24}
                    />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton
                    $variant="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDownIcon
                      size={24}
                    />
                    Saída
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              );}}
          />

          <Button
            type="submit"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ?
              'Cadastrando transação...' :
              'Cadastrar'
            }
          </Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
