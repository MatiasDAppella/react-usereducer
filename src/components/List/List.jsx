import styles from './List.module.css'
import Button from '../Button'
import { useState } from 'react'

export default function List ({
  elements, addNewTask, editTask, removeTask
}){
  const [input, setInput] = useState("")
  const handleClick = () => {
    addNewTask(input)
    setInput("")
  }

  return <>
    <hr/>
    <ul>{elements.map(e =>
      <li
        className={styles.list}
        key={e.id}
      >
        <span className={styles.span}>{e.text}</span>
        <div className={styles.buttons}>
          <Button
            callback={() => editTask(e.id, "edited")}
            text="edit"
          />
          <Button
            callback={() => removeTask(e.id)}
            text="remove"
          />
        </div>
      </li>
    )}</ul>
  <hr/>
  <input
    type="text"
    className={styles.input}
    value={input}
    onChange={(event) => setInput(event.target.value)}
  />
  <Button
    callback={handleClick}
    text="add"
  />
  </>
}