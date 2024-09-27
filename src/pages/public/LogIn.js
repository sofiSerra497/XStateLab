import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import { formMachine } from '../../machine/formMachine';

function LogIn() {
  const [name, setName] = useState('');
  const [current, send] = useMachine(formMachine);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    send({ type: 'SUBMIT', data: { name } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default LogIn;