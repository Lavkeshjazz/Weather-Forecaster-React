import React from "react";

const Bangalore=(props)=>{
    return(
        <tr>
            <th scope="row" class="text-start">Bangalore</th>
            <td>{props.feels4}<sup><span>&#8451;</span></sup></td>
            <td>{props.humid4}%</td>
            <td>{props.max4}<sup><span>&#8451;</span></sup></td>
            <td>{props.min4}<sup><span>&#8451;</span></sup></td>
            <td>{props.feels4}<sup><span>&#8451;</span></sup></td>
            <td>{props.ws4} Km/hr</td>
          </tr>
    )
}

export default Bangalore;