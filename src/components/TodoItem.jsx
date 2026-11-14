
function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="todo-item">
      <label className={task.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {task.text}
      </label>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
