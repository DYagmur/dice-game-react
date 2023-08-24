export function Input({handleInput, value}) {
    return <input type="number" className="text-gray-500 " onChange={(e) => handleInput(e.target.value)} value={value}/>
}