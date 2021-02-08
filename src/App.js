import React, { useRef } from 'react';
import UserList from './UserList';
/*
  useRef의 또다른 용도는 컴포넌트 안에서 
  조회 및 수정할 수 있는 변수를 관리하는 것이다.

  - setTimeout, setInterval을 통해서 만들어진 id
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll 위치
  위와 같은 값을 관리한다.
*/
function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  /*
    App 컴포넌트에서 배열에 새 항목을 추가하여
    새 항목에서 사용할 고유 id를 관리하는 용도로 사용할 것이다.
  
    useRef()를 사용하여 nextId라는 변수를 생성한다.
    파라미터를 넣어주면, 이 값이 .current 값의 기본값이 된다.
  */
  const nextId = useRef(4);

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };

  return (
    <>
      <CreateUser />
      <UserList users={users} />
    </>
  );
}

export default App;
