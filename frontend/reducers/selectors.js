export const asArray = ( object ) => {
    return(
        Object.keys(object).map(key => object[key])
    )
};