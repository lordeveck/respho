const getFromLocalStorage = (field) => {
    const resphoStorage = JSON.parse(localStorage.getItem('respho'));

    return resphoStorage?.[field] ? resphoStorage[field] : null;
};

const setToLocalStorage = (field, value) => {
    let resphoStorage = JSON.parse(localStorage.getItem('respho'));

    if (resphoStorage && resphoStorage[field]) {
        resphoStorage[field] = {
            ...resphoStorage[field],
            ...value,
        };
    } else {
        resphoStorage = {
            ...resphoStorage,
            [field]: value,
        };
    }

    localStorage.setItem('respho', JSON.stringify(resphoStorage));
};

export {
    getFromLocalStorage,
    setToLocalStorage,
};
