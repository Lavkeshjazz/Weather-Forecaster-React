import React from "react";

const Kolkata=(props)=>{
    return(
        <tr>
            <th scope="row" class="text-start">Kolkata</th>
            <td>{props.feels3}<sup><span>&#8451;</span></sup></td>
            <td>{props.humid3}%</td>
            <td>{props.max3}<sup><span>&#8451;</span></sup></td>
            <td>{props.min3}<sup><span>&#8451;</span></sup></td>

            <td>{props.feels3}<sup><span>&#8451;</span></sup></td>
            <td>{props.ws3} Km/hr</td>
          </tr>
    )
}

export default Kolkata;