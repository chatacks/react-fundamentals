import  * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles';
import { ArrowCircleDownIcon, ArrowCircleUpIcon, XIcon } from '@phosphor-icons/react';
import { Button } from '../Button';

export function NewTransactionModal() {
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
        <form>
          <input
            placeholder="Descrição"
            type="text"
          />
          <input
            placeholder="Preço"
            type="number"
            min={0}
          />
          <input
            placeholder="Categoria"
            type="text"
          />

          <TransactionTypeContainer>
            <TransactionTypeButton value="income" >
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

          <Button
            type="submit"
            size="large"
          >
            Cadastrar
          </Button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}
