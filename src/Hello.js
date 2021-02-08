import React from 'react';

{
  /* 2) 비구조화 할당(구조분해)를 통해 좀 더 간결하게 작성이 가능하다. */
}
function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
  name: '이름없음', // 3) defaultProps로 기본값 설정할 수 있다.
};

{
  /*
function Hello(props) {
  return (
    <>
      <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
    </>
  );
}
*/
}

export default Hello;
