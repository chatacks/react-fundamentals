import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { HandPalmIcon, PlayIcon } from '@phosphor-icons/react';

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput, Separator,
  StartCountdownButton,
  StopCountdownButton,
  TaskInput
} from './styles';
import { differenceInSeconds } from 'date-fns';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa.'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no minímo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  const handleCreateNewCycle = (data: NewCycleFormData) => {
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

    reset();
  };

  useEffect(() => {
    let intervalId: number;

    if (activeCycle) {
      intervalId = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [activeCycle]);

  const handleInterruptCycle = () => {
    const result = cycles.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date };
      }

      return cycle;
    });

    setCycles(result);
    setActiveCycleId(null);
  };

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = minutesAmount.toString().padStart(2, '0');
  const seconds = secondsAmount.toString().padStart(2, '0');

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [activeCycle, minutes, seconds]);

  const task = watch('task');
  const isDisabledSubmit = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            list="task-suggestions"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        {activeCycle ?
          (
            <StopCountdownButton
              onClick={handleInterruptCycle}
            >
              <HandPalmIcon size={24} type='button'/>
              Interromper
            </StopCountdownButton>
          ):
          (
            <StartCountdownButton disabled={isDisabledSubmit}>
              <PlayIcon size={24}/>
              Começar
            </StartCountdownButton>
          )}
      </form>
    </HomeContainer>
  );
}
