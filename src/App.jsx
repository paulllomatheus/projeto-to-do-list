import React, { useState } from "react"
import { v4 as uuid } from "uuid"

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Rocket,
  Alert,
} from "./styles.js"

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState("")

  function inputMudou(event) {
    setTask(event.target.value)
  }

  function cliqueiNoBotão() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    )

    setList(newList)
  }

  function deletarItem(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }
  return (
    <Container>
      <ToDoList>
        <Input
          onChange={inputMudou}
          placeholder="O que tenho para fazer..."
        ></Input>
        <Button onClick={cliqueiNoBotão}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Rocket onClick={() => finalizarTarefa(item.id)}></Rocket>
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)}></Trash>
              </ListItem>
            ))
          ) : (
            <Alert>Não há itens na lista</Alert>
          )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
