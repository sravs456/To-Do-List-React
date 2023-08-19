import "./styles.css";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);
  const [editTaskIndex, setEditTaskIndex] = useState(-1);
  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  });
  const handleAdd = () => {
    setTask([...task, newTask]);
    setNewTask({ title: "", description: "" });
  };
  const handleDelete = (index) => {
    let updatedList = task.filter((_, i) => index !== i);
    setTask(updatedList);
  };
  const handleEdit = (index) => {
    setEditTaskIndex(index);
    setNewTask(task[index]);
  };
  const handleUpdateTask = () => {
    let updatedList = [...task];
    updatedList[editTaskIndex] = newTask;
    setTask(updatedList);
    setNewTask({ title: "", description: "" });
    setEditTaskIndex(-1);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask.title}
        placeholder="title"
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        value={newTask.description}
        onChange={(e) => {
          setNewTask({ ...newTask, description: e.target.value });
        }}
      />
      {editTaskIndex === -1 ? (
        <button onClick={handleAdd}>ADD</button>
      ) : (
        <button onClick={handleUpdateTask}>Update</button>
      )}

      <h1>Task are below</h1>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <button onClick={() => handleEdit(index)}>EDIT</button>
            <button onClick={() => handleDelete(index)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
