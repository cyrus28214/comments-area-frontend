import './App.css';
import CommentList from './components/CommentList';
import InputComment from './components/InputComment';
import ThemeToggler from './components/ThemeToggler';
import api from './api/comment';
import { useState, useEffect } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setLoading(true);
    const result = await api.getComments(1, -1);
    setComments(result.data.comments);
    //复刻经典：
    //此处卡顿，好让客户给钱优化
    // setTimeout(() => setLoading(false), 2000);
    setTimeout(() => setLoading(false), 1500);
  };

  const deleteComment = async (id) => {
    setLoading(true);
    const result = await api.deleteComment(id);
    await fetchComments();
    setLoading(false);
  };

  return (
    <div className="App">
      <ThemeToggler />
      <div className="px-8">
        <div className="flex flex-col items-center w-full md:w-[40rem] inset-0 mx-auto">
          <InputComment fetchComments={fetchComments} />
          <div className="divider">Comments</div>
          <CommentList comments={comments} loading={loading} deleteComment={deleteComment} />
        </div>
      </div>
    </div>
  );
}

export default App;
