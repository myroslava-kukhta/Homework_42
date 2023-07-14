import styles from'./Todo.module.css';

const Todo = ({id, text, completed, removeTodo, toggleTodoComplete}) => {
  return (
    <div className={styles.input}>
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span className="title">{text}</span>
      <button className={styles.delete}  onClick={() => removeTodo(id)}>
        &times;
      </button>
    </li>
    </div>
  )
}

export default Todo;