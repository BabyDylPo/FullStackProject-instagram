export const asArray = ({ posts }) => {
    debugger
    return(
        Object.keys(posts).map(key => posts[key])
    )
};