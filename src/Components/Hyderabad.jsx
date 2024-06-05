import React from "react";

const Hyderabad=(props)=>{
    return(
        <tr>
            <th scope="row" class="text-start">Hyderabad</th>
            <td>{props.feels6}<sup><span>&#8451;</span></sup></td>
            <td>{props.humid6}%</td>
            <td>{props.max6}<sup><span>&#8451;</span></sup></td>
            <td>{props.min6}<sup><span>&#8451;</span></sup></td>

            <td>{props.feels6}<sup><span>&#8451;</span></sup></td>
            <td>{props.ws6} Km/hr</td>
          </tr>
    )
}

export default Hyderabad;