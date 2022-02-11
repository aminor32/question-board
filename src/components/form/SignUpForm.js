import { authService } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUpForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    // 사용자가 입력한 정보 가져오기
    const username = document.getElementById('sign-up-username').value.trim();
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    const passwordConfirm = document.getElementById('sign-up-password-confirm').value;

    if (password !== passwordConfirm) {
      window.alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    } else if (username === '') {
      window.alert('이름을 입력하세요.');
    } else {
      try {
        // 새로운 유저 생성
        const newUser = await createUserWithEmailAndPassword(authService, email, password);
        
        // 프로필에 이름 저장
        await updateProfile(newUser.user, {
          displayName: username,
          photoURL: ''
        });
      } catch (error) {
        switch (error.code) {
          // 이미 가입된 이메일인 경우
          case 'auth/email-already-in-use':
            window.alert('이미 가입된 이메일입니다.');
            break;
          
          // 취약한 패스워드인 경우
          case 'auth/weak-password':
            window.alert('비밀번호는 6글자 이상이어야 합니다.');
            break;

          default:
            console.log(error.code);
        }
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='sign-up-username'>Username</label>
      <input id='sign-up-username' type='text' placeholder='이름을 입력하세요' />

      <label htmlFor='sign-up-email'>Email</label>
      <input id='sign-up-email' type='email' placeholder='이메일을 입력하세요' />

      <label htmlFor='sign-up-password'>Password</label>
      <input id='sign-up-password' type='password' placeholder='비밀번호를 입력하세요' />

      <label htmlFor='sign-up-password-confirm'>Password Confirm</label>
      <input id='sign-up-password-confirm' type='password' placeholder='비밀번호를 다시 입력하세요' />

      <input type='submit' value='가입하기' />
    </form>
  );
};

export default SignUpForm;
