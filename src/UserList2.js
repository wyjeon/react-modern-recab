import React from 'react';

function User({ user }) {
  /* 
    UserList1.js에서처럼
    배열이 고정적이라면 이런식으로 정리가 가능하지만,
    동적이 배열은 렌더링하지 못한다.

    동적인 배열을 렌더링 할 때에는
    map()함수를 사용해야 한다.
  */
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}

export default UserList;
