function Avaleht() {
  const computers = JSON.parse(localStorage.getItem("laptops")) || [];

  return (
    <div className="avaleht-text">
      <div>Tere</div>
      <div>Siin lehel saad sülearvuteid vaadata ja lisada.</div>
      <br />
      { computers.map((oneComputer) => 
        <div key={oneComputer.mark + oneComputer.mudel}>
          <div>{oneComputer.mark}</div>
          <div>{oneComputer.mudel}</div>
          <div>{oneComputer.maksumus}</div>
          <button>Teeme temaga midagi</button>
          <br />
          <br />
        </div>
      )}
    </div>
  )
}

export default Avaleht