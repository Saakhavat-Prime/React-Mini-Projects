import { useState } from "react";
import { genTicket, sum } from "./helper";

function Lottery() {
  let [ticket, setTicket] = useState((genTicket(3)));
  let isWinning = sum(ticket) === 15;

  return (
    <div>
      <h2>Lottery Game</h2>
      <div>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <h3> {isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}

export default Lottery;
