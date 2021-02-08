import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = e => {
    {
      /*
      이벤트 객체 'e'를 파라미터로 받아온다.
      'e.target'은 이벤트가 발생한 DOM인 input DOM을 가르킨다.
      'e.target.value'를 조회하면 현재 input에 입력한 값을 알 수 있다.
     */
    }
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      {/* 
        input의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요하다. 
      */}
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
