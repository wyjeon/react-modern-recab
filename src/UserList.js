import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  /*
  useEffect(() => {}, [])
  첫 번째 파라미터에는 함수,
  두 번째 파라미터에는 의존값이 들어있는 배열(deps)

  deps를 비우면 
  컴포넌트가 처음 나타날때만 
  useEffect에 등록한 함수가 호출된다.

  deps에 특정 값을 넣으면
  컴포넌트가 처음 마운트 될 때도 호출되고
  지정한 값이 바뀔 때도 호출되고
  언마운트시에도 호출되고
  값이 바뀌기 직전에도 호출된다.

  deps 파라미터를 생략한다면 -> useEffect(() => {})
  컴포넌트가 리렌더링 될 때마다 호출된다.
  */

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
