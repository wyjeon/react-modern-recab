import React, { useState } from 'react';

function InputSample() {
  {
    /*
    ### input의 개수가 여러개일 때, ###
    단순히 useState를 여러번 사용하고
    onChange를 여러개 만들어 구현할 수 있지만,
    input에 name을 설정하고 이 값을 참조해야한다.

    useState에서는 '문자열'이 아니라
    ### '객체' 형태의 상태를 관리해주어야 한다. ###

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    ...
    위와 같이 input이 수 백 가지라 가정하면
    코드가 복잡해진다.
     */
  }
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    // 여기서 const {name}은 input의 value인 name과 nickname이다. -> e.target.name

    {
      /*
      ### 리액트 상태에서 객체를 수정할 때에는 ###

      inputs[name] = value;
      이런식을 직접 수정하는 것이 아니라

      ### 새로운 객체를 만들어서
      새로운 객체에 변화를 주고
      이를 상태로 사용해주어야 한다. ###

      ### 불변성을 지킨다 ###
    */
    }
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정

      /*
      ...inputs, spread 문법
      object의 key가 동일한 경우,
      뒤에 있는 key가 앞에 있는 key를 덮는다.

        [name]: value 
              ->
        [e.target.name]: e.target.value

        setInputs({
          [name]: value
        });
              -> 
        setInputs({
          name: '이순신'
          nickname: '최고의 장군'
        });
      */
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
