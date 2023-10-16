import React from 'react'

const Table = (invoices) => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                    {
                        invoices.map((invoice) => (
                            <tr key={invoice.id}>
                                {/* <InvoiceItem /> */}
                                {invoice.name}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
