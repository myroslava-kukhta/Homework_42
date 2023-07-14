import Todo from './Todo';
import styles from './List.module.css'

const List = ({ todos, removeTodo, toggleTodoComplete }) => {
  return ( <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default List;