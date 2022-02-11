import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../../firebase'

const SignInForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    try {
      await signInWithEmailAndPassword(authService, email, password);
      console.log('log in success');
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          window.alert('가입되지 않은 이메일입니다.');
          break;

        case 'auth/wrong-password':
          window.alert('잘못된 비밀번호입니다.');
          break;

        case 'auth/too-many-requests':
          window.alert('나중에 시도하세요.');
          break;

        default:
          console.log(error.code);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='sign-in-email'>Email</label>
      <input id='sign-in-email' type='email' placeholder='이메일을 입력하세요'/>

      <label htmlFor='sign-in-password'>Password</label>
      <input id='sign-in-password' type='password' placeholder='비밀번호를 입력하세요' />

      <input type='submit' value='로그인' />
    </form>
  );
};

export default SignInForm;
