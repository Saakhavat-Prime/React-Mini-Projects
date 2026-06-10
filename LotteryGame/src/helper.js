function genTicket(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}
function sum(ticket) {
    return ticket.reduce((sum ,ticket) => sum + ticket, 0);
}

export {genTicket, sum};