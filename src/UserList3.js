import React from 'react';

function User({ user }) {
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
      {users.map(user => (
        /*
          map()는 배열안에 있는 각 원소를 변환하여 
          새로운 배열을 만들어준다.

          index.js:1 Warning: Each child in a list should have a unique "key" prop.
          리액트에서 배열을 렌더링 할 때에는
          key라는 props가 필요하다.
          */
        <User user={user} />
      ))}
    </div>
  );
}

export default UserList;
