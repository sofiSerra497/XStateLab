# Aprendizaje de XState: Creando una máquina de estados simple

Este repositorio es un espacio para explorar y aprender los fundamentos de XState. A través de ejemplos prácticos, se cubrirán conceptos como estados, transiciones, eventos y contextos.


## Instalación

```bash
- [git clone [https://github.com/tu-usuario/aprendizaje-xstate.git](https://github.com/tu-usuario/aprendizaje-xstate.git)
](https://github.com/sofiSerra497/XStateLab.git)

- cd aprendizaje-xstate

- npm install

# ¿Por qué state machines?

La maquina de estado es un concepto que se usa para manejar sistemas complejos. Imagina 🌈 que tenes una aplicación que se construye a partir de varias partes. La app contiene la lógica de negocio que también se comunica con el mundo exterior. Pueden pasar un montón de acciones que a lo mejor no están contempladas. Lo que hacen los estados es mantener la maquina transparente y bien descrita (organizada). 

Cada maquina de estado contiene las siguientes partes que son 4 (como los estados del agua ): 

- Estados 😭**😡😂😱**
- Eventos 🎊
- Estados iniciales  🏁
- Transiciones 🔃
- Estados Finales **⚰️**

El beneficio principal de las maquinas de estado es que solo pueden estar en 1 estado a la vez, la transición entre los estados de la maquina lo hace solo uno a la vez y solo se puede hacer si sucede un evento que lo permita.
