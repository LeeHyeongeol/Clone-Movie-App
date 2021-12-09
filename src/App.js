import React from 'react';
// import Potato from './potato'; //  ./ 는 현재파일이 있는 폴더라는 뜻이다.

function Potato() {
  return (
    <div>
      <h3>안녕하세요. 말하는 감자입니다.</h3>
    </div>
  )
}

function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>"이현걸입니다."</h1>
      <Potato />
    </div>
  )
}

export default App;
