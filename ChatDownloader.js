const info = document.getElementsByClassName('ui-box ap')

// console.log(info)

const children = info[0].children[1].children

// console.log(children)

var list = []
const prompts = 500

for (let i = 0; i < prompts; i++){

    const increment = window.innerHeight

    setTimeout(() => {
        document.getElementsByClassName('ui-box do cs dp cw cx dq dr ds dt du dv dw dx dy dz ea eb ec ed ee ef eg eh ei ej')[0].scrollBy(0,-increment)
        console.log('moving ',increment)
    }, 10*i);    

    setTimeout(() => {
        for (let i = 0; i < 10; i++) {

            // console.log('index',i)
        
            try {
                const message = children[i]
                const msgComponent = message.children[1]
                const msgWrapper = msgComponent.children[0]
                const quote = msgWrapper.children[0]
                const msgContainer = msgWrapper.children[1]
                const msgContent = msgContainer.childNodes[0]
                const msgContentContainer = msgContent.childNodes[3]
                const content = msgContentContainer.ariaLabel.split('"').join("'").split('\\').join('/')
            
                if(content.startsWith('Image') || content == null || content.startsWith('image')){
                    continue
                } else {
        
                     // console.log(content.split('Begin Reference')[1].split('End reference')[0])
                    
                    if(content.split('Begin Reference')[1]){
                        const referenceQuote = content.split('Begin Reference')[1].split('End reference')[0]
                        // console.log(referenceQuote)
                        list.push('§'+referenceQuote+'§'+content.split('Begin Reference')[0]+content.split('End reference')[1]+','+
                                   quote.innerHTML.split('by')[1].replace(/ +/gi,'').split('(Student)')[0].split(',').join(" "))
                    } else {
                         list.push(content+','+
                                    quote.innerHTML.split('by')[1].replace(/ +/gi,'').split('(Student)')[0].split(',').join(" "))   
                    }
                    
                }
            } catch (error) {
                // console.log(error)
            }
            
        }
    }, 1000*i);

}

setTimeout(() => {
    var tab = window.open('about:blank','_blank')
    tab.document.write('Save below as a .json</br></br>["',list.join('", "'),'"]')
}, 10*prompts);

console.log(list)