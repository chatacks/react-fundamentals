import styled from 'styled-components';

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: var(--text-2xl);
    font-weight: var(--fw-bold);
  }

`;


export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  margin-top: 2rem;

  table {
    width: 100%;

    border-collapse: collapse;

    min-width: 600px;

    th {
      background-color: var(--gray-500);
      padding: 1rem;

      text-align: left;
      font-size: var(--text-sm);

      &:first-child {
        border-top-left-radius: .5rem;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: .5rem;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: #29292e;
      border-top: 4px solid var(--gray-600);

      padding: 1rem;

      font-size: var(--text-sm);

       &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

interface StatusProps {
  statusColor?: 'yellow' | 'red' | 'green';
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: .5rem;

  &::before {
    content: "";
    width: .5rem;
    height: .5rem;
    border-radius: 50%;

    background-color: ${(props) => `var(--${props.statusColor}-500)`};
  }
`;
