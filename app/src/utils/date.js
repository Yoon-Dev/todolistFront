export const toRealDate = lameDate => {
    const tabdate = lameDate.split('/')
    return `${tabdate[2]}-${tabdate[1]}-${tabdate[0]}`;
}

export const dateConverter = (date) => {
    date = date.split(/\/|-/)
    return parseInt(date[0]+date[1]+date[2])
}

export const setNewValueEtat = (date) => {
    const today = dateConverter(toRealDate(new Date().toLocaleDateString()))
    switch (true) {
        case dateConverter(date) > today:
            return 'bon'
        case dateConverter(date) < today:
            return 'retard'        
        default:
            return 'today'
    }
}