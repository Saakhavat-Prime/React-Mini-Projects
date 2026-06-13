import { useState } from "react";
import { genTicket} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

function Lottery({n, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = winCondition(ticket);
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
      <Button action={buyTicket} />
      <h3> {isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}

export default Lottery;
