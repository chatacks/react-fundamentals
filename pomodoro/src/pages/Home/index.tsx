import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { HandPalmIcon, PlayIcon } from '@phosphor-icons/react';

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';
import { Countdown } from './components/Countdown';
import { NewCycleForm } from './components/NewCycleForm';
import { useContext } from 'react';
import { CyclesContext } from '../../contexts/CycleContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa.'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no minímo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data);
    reset();
  };

  const task = watch('task');
  const isDisabledSubmit = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ?
          (
            <StopCountdownButton
              onClick={interruptCurrentCycle}
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
