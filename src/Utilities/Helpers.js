// LOCAL STORAGE
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// DELETE ITEM
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}

// RANDOM COLOR
const generateRandomColor = () => {
    const existingInvoiceLength = fetchData('invoices')?.length ?? 0;
    return `${existingInvoiceLength * 34} 65% 50%`
}

// CREATE INVOICE
export const createInvoice = ({
    name, hours, funding,
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        name: name,
        hours: +hours,
        funding: funding,
        color: generateRandomColor(),
    }
    const existingInvoices = fetchData('invoices') ?? []
    return localStorage.setItem('invoices', JSON.stringify([...existingInvoices, newItem]))
}