import React from 'react';

// onRemove()는 id가 __인 객체를 삭제한다.
function User({ user, onRemove, onToggle }) {
  return (
    <div>
      {/* 
        active의 값에 따라 폰트 색상을 바꾼다.
        마우스를 올렸을 때 커서를 바꾼다.
      */}
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>

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
