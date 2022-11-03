import { useState } from "react";

function App() {
  /* string state toDo와 array state toDos 선언 */
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  /* toDo state 값을 변경하는 onChange 함수 선언 */
  function onChange(event) {
    setToDo(event.target.value);
  }
  /* toDos state 값을 변경하는 onSubmit 함수 선언 */
  function onSubmit(event) {
    event.preventDefault(); // 브라우저의 기본동작을 막아준다.
    if (toDo === "" || toDo.length < 3) {
      console.log("error");
      setToDo("");
      return;
    } // toDo가 빈 문자열이거나 toDo의 길이가 3미만이면 error를 출력
    setToDo(""); // onSubmit이 발생하면 toDo의 값을 빈문자열로 초기화
    console.log("new toDo is = ", toDo);
    setToDos((toDos) => [toDo, ...toDos]); // onSubmit이 발생하면 toDos의 앞에 toDo를 추가 , ...toDos는 toDos안의 요소들을 나열한다
    console.log("new toDos is = ", [toDo, ...toDos]);
  }
  return (
    <div>
      <h1>My Todo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do </button>
      </form>
      <ul>
        {toDos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
