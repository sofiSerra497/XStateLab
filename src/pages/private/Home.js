import React from 'react';
import { useMachine } from '@xstate/react';
import { formMachine } from '../../machine/formMachine';

function Home() {
  const [current, send] = useMachine(formMachine);

  const handleLogout = () => {
    send('EXIT');
  };

  return (
    <div>
      <h1>Bienvenido, {current.context.nombre}!</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Home;