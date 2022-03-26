import { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar reack hooks",
  ]);

  const [input, setInput] = useState([""]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");

    if (tarefas) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput("");
  }, [tarefas, input]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <br />
      <strong>você tem {totalTarefas} tarefas!</strong>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}> add</button>
    </div>
  );
}

export default App;
