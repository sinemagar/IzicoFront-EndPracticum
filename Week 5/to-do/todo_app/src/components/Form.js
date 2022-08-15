import {  useState } from "react";


//app.js e yollanacaklar formdan alındı
function Form({ todos, setTodos }) {
    //form için usestate
    const [form, setForm] = useState("");
    //formda değişiklik
    const onChangeForm = (e) => setForm(e.target.value);

    //submit etme
    const onSubmitForm = (e) => {
        e.preventDefault();//sürekli yenilenmeden kaçınma
        //eğer iput boşsa
        if (form === "") {
            alert("Please add a ToDo");
            return false;
        }
        //setTodos a formfdan title ı default olarak false completed
        //id de her seferinde 1 arttırarak ata
        setTodos([
            ...todos,
            { title: form, completed: false, id: todos.at(-1).id + 1 },
        ]);
        console.log(todos);
        setForm("");//setformu sıfırla
    };
    return (
        <div className="header">
            <form onSubmit={onSubmitForm}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={onChangeForm}
                ></input>
            </form>
        </div>
    );
}

export default Form;