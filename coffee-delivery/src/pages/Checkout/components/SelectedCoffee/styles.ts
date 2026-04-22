import styled from 'styled-components';
import { BaseButton } from '../../../../styles/global';

export const SelectedCoffeeCardContainer = styled.div`
  padding: .5rem .25rem;
  display: flex;

  gap: 1.25rem;

  & p:last-child {
    margin-left: auto;
    font-weight: var(--fw-bold);
  }

  & img {
    aspect-ratio: 1/1;
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }

  &>div {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    & div {
      display: flex;
    }
  }

`;

export const RemoveButton = styled(BaseButton)`
  margin-left: .5rem;
  gap: .25rem;
  line-height: 0;
  padding: .5rem;

  &:hover {
    background-color: var(--gray-500);
  }
`;

export const Separator =styled.div`
  height: 1px;
  background-color: var(--gray-400);
  margin-block: 1.5rem;
`;
