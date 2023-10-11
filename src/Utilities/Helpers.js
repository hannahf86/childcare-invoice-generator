// LOCAL STORAGE
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// BUTTON DELAY HELPER
export const waait = () => new Promise(res => setTimeout(res, Math.random() * 800))

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
    name, childName, hours, funding,
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        name: name,
        childName: childName,
        hours: +hours,
        funding: funding,
        color: generateRandomColor(),
    }
    const existingInvoices = fetchData('invoices') ?? []
    return localStorage.setItem('invoices', JSON.stringify([...existingInvoices, newItem]))
}

// FORMATTING

// currency
export const formatCurrency = (amt) => {
    return amt.toLocalString(undefined, {
        style: 'currency',
        current: 'BPS'

    })
}