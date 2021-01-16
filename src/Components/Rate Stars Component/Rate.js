import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rate(props) {
    const tab = [1, 2, 3, 4, 5]
    return (
        <div>
            {
                tab.map((el,index)=> props.note>=el?<FontAwesomeIcon key={index} color="yellow" icon={faStar} onClick={()=>props.handleRate(index+1)}/> : 
                                                <FontAwesomeIcon  key={index} color="gray" icon={faStar} onClick={()=>props.handleRate(index+1)}/>)
            }
        </div>
    )
}
