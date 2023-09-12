import React from 'react'

function TextBubble(props) {
    switch(props.dangerlevel){
        case 1:
            return(
                <div className='border-1 rounded-pill d-inline p-2 w-auto m-1 ms-0' 
                style={{background: "#fcf5c7"}} >
                    {props.content}
                </div>
            )
        case 2:
            return(
                <div className='border rounded-pill d-inline p-2 w-auto m-1 ms-0' 
                style={{background: "#ffee93"}} >
                    {props.content}
                </div>
            )
        case 3:
            return(
                <div className='border rounded-pill d-inline p-2 w-auto m-1 ms-0' 
                style={{background: "#adf7b6"}} >
                    {props.content}
                </div>
            )
        case 4:
            return(
                <div className='border rounded-pill d-inline p-2 w-auto m-1 ms-0' 
                style={{background: "#79addc"}} >
                    {props.content}
                </div>
            )
        case 5:
            return(
                <div className='border rounded-pill d-inline p-2 w-auto m-1 ms-0' 
                style={{background: "#ffc09f"}} >
                    {props.content}
                </div>
            )
        default:
            return(
                <div className='border rounded-pill d-inline p-2 w-auto m-1 ms-0'  >
                    {props.content}
                </div>
            )
    
    }
  
}

export default TextBubble