import { ArrowCircleDownIcon, ArrowCircleUpIcon, CurrencyDollarIcon } from '@phosphor-icons/react';
import { SummaryCard, SummaryContainer, SummaryContent } from './styles';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContent>
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUpIcon
              size={32}
              color="#00b37e"
            />
          </header>
          <strong>R$ 17.400,00</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDownIcon
              size={32}
              color="#f75a68"
            />
          </header>
          <strong>R$ 1.259,00</strong>
        </SummaryCard>

        <SummaryCard $variantColor="green">
          <header>
            <span>Total</span>
            <CurrencyDollarIcon
              size={32}
              color="#ffffff"
            />
          </header>
          <strong>R$ 16.141,00</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  );
}
