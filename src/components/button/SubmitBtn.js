const SubmitBtn = ({ value }) => {
  return(
    <input 
      type='submit' 
      value={value}
      className='btn btn-primary'
    />
  );
};

export default SubmitBtn;