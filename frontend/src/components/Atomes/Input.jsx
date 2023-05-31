
const Input = (props) => {
  return (
    <input 
        type={props.type}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
    />
  )}
  
export default Input
