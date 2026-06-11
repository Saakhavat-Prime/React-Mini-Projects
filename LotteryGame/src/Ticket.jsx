import TicketNum from "./TicketNum";
import './Ticket.css';
function Ticket({ticket}) {
    return (
        <div className="Ticket">
            <p>Ticket:</p>
           < br />
           {ticket.map((num, indx) =>(

            <TicketNum key={indx} num={num} />
            
            )
            )}
        </div>
    );

}
export default Ticket;