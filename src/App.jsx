import './App.css';
import CommentList from './components/CommentList';
import InputComment from './components/InputComment';
import ThemeToggler from './components/ThemeToggler';

function App() {
  return (
    <div className="App">
      <ThemeToggler />
      <div className="px-8">
        <div className="flex flex-col items-center w-full md:w-[40rem] inset-0 mx-auto">
          <InputComment />
          <div className="divider">Comments</div>
          <CommentList />
        </div>
      </div>
    </div>
  );
}

export default App;
