// LOCAL STORAGE
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// DELETE ITEM
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}