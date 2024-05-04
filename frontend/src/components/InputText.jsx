/* eslint-disable react/prop-types */
const InputText = ({labelName,InpType,placeholder,name}) => {
  return (
    <>
      <label htmlFor="name" style={{marginBottom:"0.8rem"}}>{labelName}</label>
      <input
        type={InpType}
        name={name}
        placeholder={placeholder}
        className="form-control"
        style={{ backgroundColor: "#2c3444" ,border:"none",color:"#fff"}}
        required
      />
    </>
  );
}

export default InputText