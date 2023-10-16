import './App.css'
import List from './components/List'
import useTasks from './hooks/useTasks'

export default function App() {
  const {
    tasks,
    addNewTask,
    editTask,
    removeTask
  } = useTasks(initialState)

  return <main className='main'>
    <h1>Tasks</h1>
    <List
      elements={tasks}
      addNewTask={addNewTask}
      editTask={editTask}
      removeTask={removeTask}
    />
  </main>
}

const initialState = [
  {id: 0, text: "Lavar la ropa"},
  {id: 1, text: "Cocinar"},
  {id: 2, text: "Pasear al perro"},
]