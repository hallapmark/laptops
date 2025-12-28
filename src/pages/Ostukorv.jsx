import { useState } from "react"

function Ostukorv() {
  const titleStyle = { margin: "1rem 0" };
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops")) || []);

  const kustuta = (index) => {
    ostukorv.splice(index, 1);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
  }

  return (
    <div>
      <h1 style={titleStyle}>Ostukorv</h1>
      { ostukorv.map((computer, index) => 
        <div 
          key={index}
          style={{ marginBottom: "0.8rem" }}
        >
          <span>{computer.mark}&nbsp; &nbsp;</span>
          <span>{computer.mudel}&nbsp; &nbsp;</span>
          <span>{computer.maksumus}€&nbsp; &nbsp;</span>
          <button onClick={() => kustuta(index)}>X</button>  
        </div>
      )}
    </div>
  )
}

export default Ostukorv