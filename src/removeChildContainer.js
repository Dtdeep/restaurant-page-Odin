const childContent = document.querySelector(".child-content");

const removeAllChild = () =>{
    while(childContent.firstChild){
        childContent.removeChild(childContent.firstChild);
    }
}

export {childContent, removeAllChild};