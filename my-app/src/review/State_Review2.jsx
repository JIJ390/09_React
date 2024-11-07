import React, { useState } from 'react';

const StateReview2 = () => {

  // 할 일(todo) 를 저장할 상태 변수(배열) 선언
  const [todoList, setTodoList] = useState([]);

  // StateReview2 에서만 사용 가능한 자식 컴포넌트
  const InputTodo = () => {

    // 할 일을 입력하는 input 태그 값을 저장할 상태 변수
    const [inputText, setInputText] = useState('');


    /* 추가하기 버튼 동작 */
    const addTodoHandler = () => {

      // 할 일이 입력되지 않은 경우
      if (inputText.trim().length === 0) return;

      const todo = {"text" : inputText, "completed" : false};

      // 기존 todoList + 새로운 todo 가 추가된 배열 생성
      const newTodoList = [...todoList, todo];

      // 새 배열을 todoList 에 대입
      setTodoList(newTodoList);

      setInputText('');
    }

    return(
      <div>
        <h3>할 일 추가</h3>
        <input type="text" 
               onChange={(e) => {setInputText(e.target.value)}}/>
        <button onClick={addTodoHandler}>추가하기</button>
      </div>

    );

  }

  /* 체크 박스 체크 여부 변경 시 수행할 함수 */
  const todoChange = (index) => {

    // todoList 배열 깊은 복사
    const tempTodoList = [...todoList];

    // index 번째 요소에 저장된 completed 값을 반대로 변경
    tempTodoList[index].completed = !tempTodoList[index].completed;

    // todoList 를 tempTodoList 로 변경
    setTodoList(tempTodoList);
  }




  return(
    <div className='info'>
      {/* 자식 컴포넌트 */}
      <InputTodo/>
      <ul>

        {todoList.map((item, index) => {
            return( /* 식별자 역할 */
              <li key={index}>
                <input type="checkbox" 
                       onChange={ () => { todoChange(index) }}/>
                {/* completed 값에 따라 클래스 추가 / 제거 */}
                <span className={item.completed ? 'completed' : ''}>{item.text}</span>
              </li>
            );
        })}

      </ul>
    </div>
  );

}

export default StateReview2