import React from 'react'

function Image (props){
    return(
        <div>
            <img src = {props.url} />
            <div>Error 599</div>
        </div>
    )
}

export default Image