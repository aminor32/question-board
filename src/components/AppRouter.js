import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '../routes/Post'
import NewQuestion from '../routes/NewQuestion'
import RecentQuestions from './preview/RecentQuestions';
import NavigationBar from './NavigationBar';
import SignUpForm from './form/SignUpForm';
import SignInForm from './form/SignInForm';

const Router = ({ userId = '' }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationBar />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/questions/:questionId' element={<Post userId={userId} />} />
        <Route path='/new-question' element={<NewQuestion userId={userId} />} />
        <Route path='/recent-questions' element={<RecentQuestions userId={userId}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
