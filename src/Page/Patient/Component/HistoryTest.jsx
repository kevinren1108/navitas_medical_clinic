import React from 'react'

function HistoryTest(props) {
  return (
    <div className="position-relative" style={{borderLeft: "2px dashed #eee"}} > 
        {props.index > 0? <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
            style={{background: "#ffee93"}} >
                Medication
            </div>
        </div>:<></>}
        {props.index > 1? <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffee93"}} >
                Medication
            </div>
        </div>:<></>}
        {props.index > 2? <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffee93"}} >
                Medication
            </div>
        </div>:<></>}
        {props.index > 3? <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#fcf5c7"}} >
                Injection
            </div>
        </div>:<></>}
        {props.index > 4? <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#79addc"}} >
                Injection
            </div>
        </div>: <></>}
        {props.index > 5? <div  >
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffc09f"}} >
                Pescription
            </div>
        </div>: <></>}
        {props.index > 6? <div  >
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffc09f"}} >
                Pescription
            </div>
        </div>: <></>}
        {props.index > 7? <div  >
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffc09f"}} >
                Pescription
            </div>
        </div>: <></>}
        {props.index > 8? <div  >
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffc09f"}} >
                Health Consolation
            </div>
        </div>: <></>}
        <p className='pt-3 position-absolute bottom-0 w-100 border-top'  >{props.date}</p>
    </div>
  )
}

export default HistoryTest