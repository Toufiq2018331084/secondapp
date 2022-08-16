import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Hello/>
      <Message/>
      <Message text="this a text from class component prop"/>
      <Profile name="someone" lastname="kjlkj">
        <h1>child of prop</h1>
      </Profile>
    </div>
  );
}

export default App;
