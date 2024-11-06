// import logo from './logo.svg'; 로고 사라져서 없어도 댐
import './App.css';
import ClassComponent from './components/R01_ClassComponent';
import FunctionComponent from './components/R02_FunctionComponent';
import Props1 from './components/R03_Props1';
import Props2 from './components/R04_Props2';
import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';
import State2 from './components/R07_State2';
import State3 from './components/R08_State3';
// -> R01_ClassComponent 에서 export 된 HTML 요소를 
//    ClassComponent 라고 부르겠다
//    --> <ClassComponent/> 형태로 사용 가능


// 기본적으로 //, /* */ 주석 사용 가능(JS 니까!!!)
// 단, HTML 코드가 작성되는 영역 에서는 {/*  */} 주석 사용

function App() {
  return (
    <>  {/* th:block 과 유사 하나의 요소만 return 가능하기 때문에 사용 */}
        {/* 실제 DOM은 가만히 있고 Virtual DOM 에 추가된 부분만 변화 */}
        {/* JSX(JS 에 HTML 코드 포함) 주석 */}

        {/* <ClassComponent/> */}
        {/* <FunctionComponent/> */}
        {/* <Props1></Props1> */}
        <section className='main-section'>

          <Props1 />

          <Props2 name='김영희' age='14' address='제주도' gender='여'/>
          <Props2 name='김철수' age='23' address='부산' gender='남'/>

          <Props3 productName='라면' price='3000'/>

          <State1/>
          <State2 init='0'/>

          <hr/>
          <State3/>

          <hr/>
          <Props1 num='1' name='홍길동'/>
          <Props1 num='2' name='김영희'/>
          <Props1 />

        </section>



    </>
  );
}

export default App;
