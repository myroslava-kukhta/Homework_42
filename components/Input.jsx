import styles from "./Input.module.css";

const Input = ({text, handleInput, handleKeyDown, handleSubmit}) => {
  return (
    <div className={styles.input}>
      <input className={styles.newtodo}
        placeholder="What I must to do?"
        value={text}
        onChange={event => handleInput(event.target.value)}
        onKeyDown={event => handleKeyDown(event)}
      />
      <button className={styles.button} onClick={handleSubmit}>Add new Todo</button>
    </div>
  )
}

export default Input;
