interface Props {
    type: string
    label: string
    value: string
    onChange: (x: string) => void
    status?: string ,
}

const Input = ({type, label, onChange, value, status}: Props) => {
    return (
        <div className={"flex flex-col"}>
            <label htmlFor={label} className={"text-white"}>{label}:</label>
            <input value={value} type={type} className={"rounded-lg"} id={label}
                   onChange={(e) => onChange(e.target.value)}/>
            {status && <p className={"text-left text-xs text-red-500 mt-1"}>{status}</p>}
        </div>
    );
};

export default Input;
