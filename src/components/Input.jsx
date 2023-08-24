export function Input({handleInput, value}) {
    return <input type="number" className=" " onChange={(e) => handleInput(e.target.value)} value={value}/>
}