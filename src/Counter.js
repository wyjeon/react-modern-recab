import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0); // 컴포넌트에서 동적인 값을 상태(state)라 부른다.

  /*
  line4는 배열 비구조화 할당을 통해 각 원소를 추출해준 것이다.

  useState() 함수를 호출하면 배열이 반환된다.
  첫번째 원소는 현재 상태
  두번째 원소는 Setter함수

  const numberState = useState(0);
  const number = numberState[0];
  const setNumber = numberState[1];
  */

  const onIncrease = () => {
    setNumber(number + 1); // Setter함수는 파라미터로 전달 받은 값을 최신 상태로 설정한다.
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  const onIncrease2 = () => {
    setNumber(prevNumber => prevNumber + 1);
    {
      /*
      함수형 업데이트,
      기존의 값을 업데이트하는 방법이다. 
      나중에 컴포넌트를 최적화할 때 사용한다.
      추후에 알아보자.
      */
    }
  };

  const onDecrease2 = () => {
    setNumber(prevNumber => prevNumber - 1); // 함수형 업데이트, 값을 업데이트 하는 함수를 파라미터로 넣어준다.
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button> {/* onClick으로 함수를 연결해준다. */}
      <button onClick={onDecrease}>-1</button>
      <br />
      <button onClick={onIncrease2}>+1</button>
      <button onClick={onDecrease2}>-1</button>
    </div>
  );
}

export default Counter;

/*
<button onClick={onDecrease()}>Wrong</button>
랜더링되는 시점에 함수가 호출되기 때문에
함수형태를 넣어줘여하지, 실행하면 안된다.
*/
