import '@/App.css';
import IndexRouter from './route/indexRouter.jsx';
import TestComp1 from '@/views/2_learning/TestComp1.jsx';
import Todo from '@/views/3_staging/1_todoList/Todo.jsx';
import GithubSearch from '@/views/3_staging/2_github/GithubSearch.jsx';

function App() {
  return (
    <>
      {/* <IndexRouter /> */}
      {/* <TestComp1 /> */}
      {/* <Todo /> */}
      <GithubSearch />
    </>
  );
}

export default App;
