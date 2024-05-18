import './App.css';
import ThemeToggler from './components/ThemeToggler';

function App() {
  return (
    <div className="App" data-theme="light">
      <button className="btn">Hello daisyUI</button>
      <ThemeToggler />
    </div>
  );
}

export default App;
