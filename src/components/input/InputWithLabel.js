const InputWithLabel = ({ label = '', tagId = '', type = 'text', placeholder = ''}) => {
  return (
    <div className='mb-3'>
      <label htmlFor={tagId} className='form-label'>{label}</label>
      <input 
        id={tagId}
        type={type}
        placeholder={placeholder}
        className='form-control'
      />
    </div>
    
  );
};

export default InputWithLabel;