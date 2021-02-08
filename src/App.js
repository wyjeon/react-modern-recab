import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
/*
  useRef의 또다른 용도는 컴포넌트 안에서 
  조회 및 수정할 수 있는 변수를 관리하는 것이다.

  - setTimeout, setInterval을 통해서 만들어진 id
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll 위치
  위와 같은 값을 관리한다.
*/
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // users도 useState를 사용하여 컴포넌트 상태로 관리한다.
  // const users = [
  const [users, setUsers] = useState([
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
  ]);

  /*
    App 컴포넌트에서 배열에 새 항목을 추가하여
    새 항목에서 사용할 고유 id를 관리하는 용도로 사용할 것이다.
  
    useRef()를 사용하여 nextId라는 변수를 생성한다.
    파라미터를 넣어주면, 이 값이 .current 값의 기본값이 된다.
  */
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    /*
      배열은 객체와 마찬가지로 불변성을 지켜야한다.
      배열의 push, splice, sort 등의 함수를 사용하면 안된다.
      ### 첫 번째 방법으로 spread 연산자를 사용한다. ###
    */
    setUsers([...users, user]);

    // ### 두 번째 방법으로 concat 함수를 사용한다.
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  /*
    배열을 제거할 때는
    마찬가지로 불변성을 지켜야한다.
    filter()함수를 사용한다.
  */
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
