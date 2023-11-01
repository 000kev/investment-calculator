import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import { useState } from "react";

const INITIAL_INPUT = {
  initial: 15000,
  return: 5.5,
  annual: 900,
  duration: 12
};

export default function App() {
  const [input, setInput] = useState(INITIAL_INPUT);
  function inputChangeHandler(id, value) {
    setInput((previous) => {return {...previous, [id] : +value}})
  }
  const validInput = input.duration >= 1;
  return (
    <>
      <Header/>
      <Input variables={input} onUpdate={inputChangeHandler}/>
      {!validInput && <p className="center">Please enter a duration longer than zero.</p>}
      {validInput && <Result variables={input}/>}
    </>
  )
}