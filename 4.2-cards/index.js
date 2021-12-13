import React from 'react';
import ReactDOM from 'react-dom';
const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = "I love React!"

const App = function(){
  return <div style={{backgroundColor: 'blue', color:"white" }}>
    {`${data[0]} ${data[1]}`},
    {`${number1+number2}`},
    {`${string.length}`}
  </div>
}

ReactDOM.render(
    <App />,
     document.getElementById('root')
);

