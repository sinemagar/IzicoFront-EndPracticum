//app.js e yollanacak veriler
function Footer({ todos, setTodos, status, setStatus }) {

    //filtreleme ile uncompleted false
    const unCompleted = todos.filter((todo) => todo.completed === false);
    //filtreleme ile completed true
    const completed = todos.filter((todo) => todo.completed === true);

    //tüm hepsini silme
    const clearCompleted = (e) => {
        e.preventDefault();//yenilenmeyi durdurma
        //settodoya false yolla
        setTodos(todos.filter((todo) => todo.completed === false));
    };

    //all active and completed için değerleri atama
    const clickStyle = (e) => {
        setStatus(e.target.id);
    };
    return (
        <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
            <span className="todo-count">
                <strong>{unCompleted.length} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <label
                        onClick={clickStyle}
                        className={status === "all" ? "selected" : ""}
                        id="all"
                    >
                        All
                    </label>
                </li>
                <li>
                    <label
                        onClick={clickStyle}
                        className={status === "active" ? "selected" : ""}
                        id="active"
                    >
                        Active
                    </label>
                </li>
                <li>
                    <label
                        onClick={clickStyle}
                        className={status === "completed" ? "selected" : ""}
                        id="completed"
                    >
                        Completed
                    </label>
                </li>
            </ul>

            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <button
                className={completed === 0 ? "hidden" : "clear-completed"}
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;