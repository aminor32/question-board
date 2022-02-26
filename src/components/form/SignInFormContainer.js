import SignInForm from './SignInForm';
import { signIn } from '../../modules/sign'

const SignInFormContainer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    await signIn();
  };

  return (
    <SignInForm onSubmit={onSubmit} test='test'/>
  );
};

export default SignInFormContainer;
