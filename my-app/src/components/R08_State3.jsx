import React, { useState } from 'react';


/*
[부모]
id, pw

[자식]
id input
pw input

*/


/* 자식 컴포넌트 */
// props : 부모로부터 전달 받은 값이 담겨있는 객체
const ChildId = (props) => {

  // 부모로 부터 전달 받은 idHandler 함수
  // -> 부모의 상태 변수 값을 
  //    자식 input 에 입력된 값으로
  //    변경하는 함수 실행
  // === 자식이 부모의 상태 변수에 값을 대입!!
  // === 자식이 부모에게 값을 전달!!!!!!!!
  const handler = props.handler;

  return(
    <div className='wrapper'>
      {/* htmlFor == html 에서 사용하는 for 속성 */}
      <label htmlFor="inputId">ID : </label>
      <input type="text" id='inputId' onChange={handler}/>
    </div>
  );

}


const ChildPw = (props) => {

  // const handler = props.handler;
  const {handler} = props; // 구조 분해 할당

  return(
    <div className='wrapper'>
      {/* htmlFor == html 에서 사용하는 for 속성 */}
      <label htmlFor="inputPw">PW : </label>
      <input type="text" id='inputPw' onChange={handler}/>
    </div>
  );

}

/* 부모 컴포넌트 */
const ParentComponent = () => {

  // 상태 변수 선언(값이 변하면 리랜더링되는 변수) 
  const [id, setId] = useState(''); // 초기값 빈칸
  const [pw, setPw] = useState(''); 

  // 이벤트 핸들러
  const idHandler = e => {
    // e : 이벤트 객체
    setId(e.target.value); 
    // input 에 작성된 값이 변하면
    // 상태 변수 id 값을 바꿔서 리랜더링 수행

    console.log(e.target.value);
  }

  const pwHandler = e => {
    setPw(e.target.value);

    console.log(e.target.value);
  }

  const loginCheck = () => {
    if(id === 'user01' && pw === 'pass01') {
      alert('로그인 성공');
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다');
    }
  }

  return(
    <>
      <ChildId handler={idHandler}/>
      <ChildPw handler={pwHandler}/>

      <div className='wrapper'>
        {/* id, pw 중 하나라도 입력 안되면 버튼 비활성화 */}
        <button disabled={!(id.length !== 0 && pw.length !== 0)} 
                onClick={loginCheck}>Ligin</button>
      </div>
    </>
  );

}

export default ParentComponent;