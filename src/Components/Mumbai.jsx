import React from "react";

const Mumbai=(props)=>{
    return(
        <tr>
            <th scope="row" class="text-start">Mumbai</th>
            <td>{props.feels2}<sup><span>&#8451;</span></sup></td>
            <td>{props.humid2}%</td>
            <td>{props.max2}<sup><span>&#8451;</span></sup></td>
            <td>{props.min2}<sup><span>&#8451;</span></sup></td>
            <td>{props.feels2}<sup><span>&#8451;</span></sup></td>
            <td>{props.ws2} Km/hr</td>
          </tr>
    )
}

export default Mumbai;