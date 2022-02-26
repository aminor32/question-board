import InputWithLabel from '../input/InputWithLabel';
import SubmitBtn from '../button/SubmitBtn';

const SignUpForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='col'>
      <InputWithLabel 
        label='Username'
        tagId='sign-up-username'
        placeholder='이름을 입력하세요'
      />

      <InputWithLabel 
        label='Email'
        tagId='sign-up-email'
        type='email'
        placeholder='이메일을 입력하세요'
      />

      <InputWithLabel 
        label='Password'
        tagId='sign-up-password'
        type='password'
        placeholder='비밀번호를 입력하세요'
      />

      <InputWithLabel
        label='Password Confirm'
        tagId='sign-up-password-confirm'
        type='password'
        placeholder='비밀번호를 다시 입력하세요'
      />

      <div className='text-center'>
        <SubmitBtn value='가입하기' />
      </div>  
    </form>
  );
};

export default SignUpForm;
