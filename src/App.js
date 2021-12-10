import React from 'react';
// import Potato from './potato'; //  ./ 는 현재파일이 있는 폴더라는 뜻이다.

function Food(props) {
  console.log(props)
  const { fav } = props
  return (
    <div>
      {/* props.fav로 입력해도 된다. */}
      <h3>안녕하세요. 말하는 {fav} 입니다.</h3>
    </div>
  )
}

function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>"이현걸입니다."</h1>
      <h2>토스뱅크 입사를 희망합니다.</h2>
      <Food fav="kimchi" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  )
}

export default App;
