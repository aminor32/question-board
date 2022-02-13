import { useNavigate } from 'react-router-dom'
 
const LinkBtn = ({ path = '/', state = {} }) => {
  const navigate = useNavigate();
  // 클릭하면 원하는 페이지로 연결
  const onClick = () => {
    navigate(path, {
      state: state,
    });
  };

  return (
    <button onClick={onClick} />
  );
};

export default LinkBtn;
