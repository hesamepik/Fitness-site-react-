import React from 'react'
import { usecard } from './context/Cardcontext';
import "../src/Cheakout.css"
function Cheakout() {
 
    const {state} = usecard();
 console.log("state", state);
  return (
    <div className="containercc">
      <div className="cardWrappercc">
        {state.selecteditem.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <p>{p.title}</p>
            <p>{p.price} T</p>
            
          </div>
        ))}
      </div>
      <div className="submitSectioncc">
        <button type="button"  >خرید  </button>
      </div>
    </div>
  )

}

export default Cheakout