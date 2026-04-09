import { useState } from 'react';
import { CyclesContext, type CreateCycleData } from '.';

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function CyclesContextProvider({ children }: {children: React.ReactNode}) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  const markCurrentCycleAsFinished = () => {
    setCycles((prevState) => prevState.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, finishedDate: new Date };
      }

      return cycle;
    }));
  };


  const createNewCycle = (data: CreateCycleData) => {
    const { task, minutesAmount } = data;
    const id = new Date().getTime().toString();

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date()
    };

    setCycles((prevState) => [...prevState, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
  };

  const interruptCurrentCycle = () => {
    setCycles((prevState) => prevState.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date };
      }

      return cycle;
    }));
    setActiveCycleId(null);
  };


  return (
    <CyclesContext
      value={
        {
          cycles,
          activeCycle,
          activeCycleId,
          amountSecondsPassed,
          markCurrentCycleAsFinished,
          setSecondsPassed,
          createNewCycle,
          interruptCurrentCycle
        }
      }
    >
      {children}
    </CyclesContext>
  );
}
