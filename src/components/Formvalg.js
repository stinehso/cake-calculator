import React, { Fragment } from 'react'
import './Formvalg.css'

function Formvalg({ which, onChoiceMade }) {
    return (
        <div className='container'>
            {which === 'all' ? 
                <Fragment>
                    <p>Fra en form...</p>
                    <div className='shape outline circle' 
                        onClick={()=>onChoiceMade({orig: 'circle'})}
                    ></div>
                    <div className='shape outline square' 
                        onClick={()=>onChoiceMade({orig: 'square'})}
                    ></div>
                    <p>eller fra et antall/ en mengde...</p>
                    <div className='shape heap' 
                        onClick={()=>onChoiceMade({orig: 'number'})}
                    >
                        <div className='smallItem outline circle top'></div>
                        <div className='smallItem outline circle bottom1'></div>
                        <div className='smallItem outline circle bottom2'></div>
                    </div>
                </Fragment>
                : 
                which === 'circleSquare' ?
                    <Fragment>
                        <p>...til en annen</p>
                        <div className='shape outline circle' 
                        onClick={()=>onChoiceMade({new: 'circle'})}
                        ></div>
                        <div className='shape outline square' 
                            onClick={()=>onChoiceMade({new: 'square'})}
                        ></div>
                    </Fragment>
                    :
                    <p>...til et annet!</p>
                 
            }
           
        </div>
    )
}

export default Formvalg
