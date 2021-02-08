import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello /> {/* 컴포넌트는 일종의 UI조각 */}
      <Hello /> {/* 여러번 재사용이 가능하다. */}
      <Hello />
    </div>
  );
}

export default App;
