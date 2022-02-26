import SignUpForm from './SignUpForm';
import { signUp } from '../../modules/sign';

const SignUpFormContainer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    signUp();
  };

  return (
    <SignUpForm onSubmit={onSubmit} />
  );
};

export default SignUpFormContainer;
