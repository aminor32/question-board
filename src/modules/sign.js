import { authService } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const signIn = async () => {
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;

  try {
    document.getElementById('sign-in-email').value = '';
    document.getElementById('sign-in-password').value = '';

    await signInWithEmailAndPassword(authService, email, password);
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
        throw new Error('Sign in Error');
    }
  }
};

const signUp = async () => {
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

      document.getElementById('sign-up-username').value = '';
      document.getElementById('sign-up-email').value = '';
      document.getElementById('sign-up-password').value = '';
      document.getElementById('sign-up-password-confirm').value = '';
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
          throw new Error('Sign up error');
      }
    }
  }
};

export { signIn, signUp };