export const TransactionHistory = ({ items }) => {
    return (
      <section>
  
        <table>
            
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
            ))}
            </tbody>
        </table>
        
      </section>
    )
}