import React, {useState} from 'react';

/* 외부에 존재하는 Context 가져오기 */
import UserContext from './UserContext';

/* 외부에 존재하는 Child 컴포넌트 가져오기 */
import Child from './Child';

/* 부모 컴포넌트 정의 */
const Parent = () => {

  /* 상태 변수로 배열 선언 */
  const [userList, setUserList] = useState([]);

  return(
    /* Context 객체에 
       {"userList" : userList, "setUserList" : setUserList} */
    <UserContext.Provider value={{userList, setUserList}}>

      <Child/>

      <table border="1">
        <thead>
          <th>순서</th>
          <th>이름</th>
          <th>나이</th>
        </thead>

        <tbody>
          {userList.map((user, index) => {
            return(
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </UserContext.Provider>
  );
}

export default Parent;