import { toast, ToastContainer } from "react-toastify";

function Avaleht() {
  const computers = JSON.parse(localStorage.getItem("laptops")) || [];

  const addToCart = (computer) => {
    const items = JSON.parse(localStorage.getItem("cartLaptops")) || [];
    items.push(computer);
    localStorage.setItem("cartLaptops", JSON.stringify(items));
    toast.success("Laptop added to cart!")
  }

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
          <button onClick={() => addToCart(oneComputer)}>Lisa ostukorvi</button>
          <br />
          <br />
        </div>
      )}
      <ToastContainer theme="dark" />
    </div>
  )
}

export default Avaleht