export function Wheel({degrees}){
    return <><div className="arrow"> 
    <img src="https://i.imgur.com/k6g31Sg.png" />
    </div> 
    <div className="wheel">
        <img src="https://i.imgur.com/N2W3N0S.png" style={{transform: `rotateZ(${degrees}deg)`}} />
        </div></>

}