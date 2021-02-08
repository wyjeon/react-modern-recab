import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <>
      <div style={{ color }}>
        {isSpecial ? <b>*</b> : null} {/*삼항 연산자를 통해 true일 경우 *을 표시한다. */}
        안녕하세요 {name}
      </div>

      <div style={{ color }}>
        {/* 
          단축 평가 논리 계산법, 
          isSpecial이 false이면 false 
          true이면 <b>*</b> 이다.
        */}
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    </>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
