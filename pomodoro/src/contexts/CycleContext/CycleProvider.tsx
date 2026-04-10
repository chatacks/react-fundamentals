import { useEffect, useReducer, useState } from 'react';
import { CyclesContext, type CreateCycleData } from '.';
import { cyclesReducer } from '../../reducers/cycles/reducer';
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from '../../reducers/cycles/action';
import { differenceInSeconds } from 'date-fns';
export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function CyclesContextProvider({ children }: {children: React.ReactNode}) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, { cycles: [], activeCycleId: null }, (initalState) => {
    const storedStateAsJSON = localStorage.getItem('@pomodoro:cycles-state-1.0.0');
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return initalState;
  });

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if(activeCycle) {
      return differenceInSeconds(
        new Date(),
        new Date (activeCycle.startDate)
      );
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem('@pomodoro:cycles-state-1.0.0', stateJSON);
  }, [cyclesState]);


  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
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

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  };

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction());
  };

  const interruptCurrentCycle = () => {
    dispatch(interruptCurrentCycleAction());
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
