import InputWithLabel from '../input/InputWithLabel';
import SubmitBtn from '../button/SubmitBtn';
import { signIn } from '../../modules/sign'

const SignInForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='col'>
      <InputWithLabel 
        label='Email'
        tagId='sign-in-email'
        type='email'
        placeholder='이메일을 입력하세요'
      />

      <InputWithLabel 
        label='Password'
        tagId='sign-in-password'
        type='password'
        placeholder='비밀번호를 입력하세요'
      />

      <div className='text-center'>
        <SubmitBtn value='로그인' />
      </div>
    </form>
  );
};

export default SignInForm;
