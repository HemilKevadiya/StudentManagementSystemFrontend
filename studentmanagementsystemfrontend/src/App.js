import logo from './logo.svg';
import './App.css';
import Student from './Components/Student.js';
import StudentList from './Components/StudentList.js';
import NavigationBar from './Components/NavigationBar.js';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Student/>
      <StudentList/>
    </div>
  );
}

export default App;