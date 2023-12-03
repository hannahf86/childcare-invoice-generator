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
    const existingInvoiceLength = fetchData('familyName')?.length ?? 0;
    return `${existingInvoiceLength * 34} 65% 50%`
}

// CREATE INVOICE
export const familyName = ({
    familyName
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        familyName: familyName,
        color: generateRandomColor(),
    }
    const existingFamilies = fetchData('familyName') ?? [];
    return localStorage.setItem('familyName', JSON.stringify([...existingFamilies, newItem]))
}

// CHILD DETAILS
export const addChild = ({
    name, addChild, childsAge, hoursPerWeek, funding, familyNameId
}) => {
    const newItem = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        name: name,
        addChild: addChild,
        childsAge: +childsAge,
        hoursPerWeek: +hoursPerWeek,
        funding: funding,
        familyNameId: familyNameId,
    }
    const existingChildren = fetchData('addChild') ?? [];
    return localStorage.setItem('addChild', JSON.stringify([...existingChildren, newItem]))
}

