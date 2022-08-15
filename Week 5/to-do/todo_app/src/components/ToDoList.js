import React from "react";


//app.js e yollanacak veriler
function ToDoList({ todos, setTodos, todo }) {
    //todos a mapleme işlemi
	const isCompleted = () =>
		setTodos(
			todos.map((item) => {
                //item dam gelem id todo ya eşitse ...item üzerine ekle
				return item.id === todo.id
					? { ...item, completed: !item.completed }
					: item;
			})
		);

        //item silme
	const deleteItem = () =>
		setTodos(todos.filter((item) => item.id !== todo.id));

	return (
		<li key={todo.id} className={todo.completed ? "completed" : ""}>
			<div className={"view"}>
				<input
					type="checkbox"
					className="toggle"
					// onClick={isCompleted}
					checked={todo.completed}
					onChange={isCompleted}
				/>
				<label onClick={() => {}}>{todo.title}</label>
				<button className="destroy" onClick={deleteItem}>x</button>
			</div>
		</li>
	);
}

export default ToDoList;