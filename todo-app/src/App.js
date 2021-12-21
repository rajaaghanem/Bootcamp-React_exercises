import "./App.css";

if (module.hot) {
  module.hot.accept();
}

function App() {

  return (<div className="app-container">
    <input type="textarea" className="input-style"/>
    <button className="add-task-style">Add Task</button>
  </div>);
}

export default App;
