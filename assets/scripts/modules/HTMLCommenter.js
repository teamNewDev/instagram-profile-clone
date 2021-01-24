//a simple html commenting function to avoid rewriting html comment symbols
const HTMLComment = (commentContent = "")=>{
    return `<!-- ${commentContent} -->`;
}

//export HTMLComment as a module
export default HTMLComment;