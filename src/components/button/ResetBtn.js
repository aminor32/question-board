const ResetBtn = ({ value, onClick }) => {
  return (
    <input
      type='reset'
      value={value}
      onClick={onClick}
      className='btn btn-light'
    />
  );
};

export default ResetBtn;
