import React from "react";

const Delhi=(props)=>{
    return(
        <tr>
            <th scope="row" class="text-start">New Delhi</th>
            <td>{props.feels1}<sup><span>&#8451;</span></sup></td>
            <td>{props.humid1}%</td>
            <td>{props.max1}<sup><span>&#8451;</span></sup></td>
            <td>{props.min1}<sup><span>&#8451;</span></sup></td>
            <td>{props.feels1}<sup><span>&#8451;</span></sup></td>
            <td>{props.ws1} Km/hr</td>
          </tr>
    )
}

export default Delhi;