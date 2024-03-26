
interface Props {
  id?: string;
  placeholder?: string;
}
function InputText(props:Props) {
    const {id,placeholder} = props
    return (
        <div className='h-full w-full px-2 '>
            <input
                type='text'
                id={id}
                className='h-full w-full px-2 bg-transparent outline-none ring-transparent '
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputText