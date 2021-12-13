import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

const App = function (){
  return (
    <div style={{width:'600px', height: '400px', backgroundColor:'red',margin:'40px'}}>
      <div style={{width:'500px', height: '300px', backgroundColor:'blue', margin:'40px'}}>
        <div style={{width:'400px', height: '200px', backgroundColor:'green', margin:'40px'}}>
          <div  style={{width:'200px', height: '50px', backgroundColor:'pink', margin:'80px'}}></div>
          <div style={{width:'200px', height: '50px', backgroundColor:'pink', margin:'80px'}}></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

