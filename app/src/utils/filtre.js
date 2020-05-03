export const filterfct = (value, tofilter, datafilter) => {
    const nodes = document.querySelectorAll(`.${tofilter}`)
    nodes.forEach(e => {
        if(datafilter && e.getAttribute(datafilter)){
            const title = e.getAttribute(datafilter).toLowerCase()
            if(title.includes(value.toLowerCase())){
                e.classList.remove('hidden')   
            }else{
                e.classList.add('hidden')
            }
        }
    })
}