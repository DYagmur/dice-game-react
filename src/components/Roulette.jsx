import './Roulette.css'
import {Button} from './Button';
import {Wheel} from './Wheel';
import {Input} from "./Input";
import {useState} from "react";

export function Roulette() {
    const [degrees, setDegrees] = useState(0);
    const [inputNumber, setInputNumber] = useState(0);
    let currentPosition = 0;
    function getSpin(){
        fetch("http://localhost:8000/getUserRoulette", {
            method: "GET",
            headers: { task: "spin"},
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.getSpin);
            currentPosition += 1080 + parseInt(data.getSpin.degrees)
            setDegrees(currentPosition)
            setTimeout(() => userWinner(data.getSpin.number),8000)
        
        })
    }
    function handleInput(e) {
        let newUserData = e;
        setInputNumber(newUserData);
    }

    function userWinner(numberServer) {
        if (numberServer == inputNumber) {
            alert("You win")
        } else {
            alert("You lost")
        }
    }

    return <div className='roulette'>
      <Button getSpin={getSpin} />
      <Wheel degrees={degrees}/>
      <Input handleInput = {handleInput} value={inputNumber} />
    </div>
}








