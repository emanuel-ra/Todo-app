
interface Props {
  id?: string;
  placeholder?: string;
}
function InputText(props:Props) {
    const {id,placeholder} = props
    return (
      <div className='h-full w-full '>
        <input
          aria-label={placeholder}
          type='text'
          id={id}
          className='h-full w-full bg-transparent outline-none ring-transparent text-dark-grayish-blue tracking-wide'
          placeholder={placeholder}
        />
      </div>
    );
}

export default InputText