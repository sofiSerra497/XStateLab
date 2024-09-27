import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { useMachine } from "@xstate/react";
import constantPages from "./machine/constantPages";
import LogIn from "./pages/public/LogIn";
import Home from "./pages/private/Home";
import { formMachine } from "./machine/formMachine";

function App() {
  const [current] = useMachine(formMachine);
console.log(current.value)
	return (
		<Router>
			<Routes>
        <Route path="/" element={current.value === constantPages.login ? <LogIn /> : <Home />} />
			</Routes>
		</Router>
	);
}
export default App;
