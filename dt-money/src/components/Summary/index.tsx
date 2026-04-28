import { ArrowCircleDownIcon, ArrowCircleUpIcon, CurrencyDollarIcon } from '@phosphor-icons/react';
import { SummaryCard, SummaryContainer, SummaryContent } from './styles';
import { priceFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
  const { income, outcome, total } = useSummary();

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
          <strong>{priceFormatter.format(income)}</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleDownIcon
              size={32}
              color="#f75a68"
            />
          </header>
          <strong>{priceFormatter.format(outcome)}</strong>
        </SummaryCard>

        <SummaryCard $variantColor="green">
          <header>
            <span>Total</span>
            <CurrencyDollarIcon
              size={32}
              color="#ffffff"
            />
          </header>
          <strong>{priceFormatter.format(total)}</strong>
        </SummaryCard>
      </SummaryContent>
    </SummaryContainer>
  );
}
