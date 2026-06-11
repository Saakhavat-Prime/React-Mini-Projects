import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery({n, winningSum}) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h2>Lottery Game</h2>
      <div>
       <Ticket ticket = {ticket} />
      </div>
      <br />
      <button onClick={buyTicket}>Generate Ticket</button>
      <h3> {isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}

export default Lottery;
