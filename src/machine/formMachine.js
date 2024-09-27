import { createMachine, assign } from 'xstate';

export const formMachine = createMachine({
  id: 'login',
  initial: 'login',
  context: {
    name: '' 
  },
  states: {
    login: {
      on: {
        SUBMIT: {
          target: 'home',
          actions: 'assignName'
        }
      }
    },
    home: {
      on: {
        EXIT: 'login'
      }
    }
  }
}, {
  actions: {
    assignName: assign({
      name: (context, event) => event.data.name,
    })
  }
});