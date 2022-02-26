import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '../routes/Post'
import NewQuestion from '../routes/NewQuestion'
import RecentQuestions from './preview/RecentQuestions';
import NavigationBar from './NavigationBar';
import SignUp from '../routes/SignUp';
import SignIn from '../routes/SignIn';

const Router = ({ userId = '' }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationBar />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/questions/:questionId' element={<Post userId={userId} />} />
        <Route path='/new-question' element={<NewQuestion userId={userId} />} />
        <Route path='/recent-questions' element={<RecentQuestions userId={userId}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
