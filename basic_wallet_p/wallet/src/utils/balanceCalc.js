export const balanceCalc = (transactions, userName) =>
{
    let bal = 0
    transactions.forEach(el =>
    {
        if(el.recipient === userName) bal += el.amount
        if(el.sender === userName) bal -= el.amount
    })

    return bal
}