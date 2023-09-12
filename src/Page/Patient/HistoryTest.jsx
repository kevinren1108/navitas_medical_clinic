import React from 'react'

function HistoryTest() {
  return (
    <div className="position-relative" style={{borderLeft: "2px dashed #eee"}} > 
        <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block' 
            style={{background: "#ffee93"}} >
                Medication
            </div>
        </div>
        <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffee93"}} >
                Medication
            </div>
        </div>
        <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffee93"}} >
                Medication
            </div>
        </div>
        <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#fcf5c7"}} >
                Injection
            </div>
        </div>
        <div>
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#79addc"}} >
                Pescription
            </div>
        </div>
        <div  >
            <div className='border-1 rounded-pill p-2 w-auto mb-1 d-inline-block'  
            style={{background: "#ffc09f"}} >
                Health Consolation
            </div>
        </div>
        <p className='pt-3 position-absolute bottom-0 w-100 border-top'  >2020-11-03</p>
    </div>
  )
}

export default HistoryTest