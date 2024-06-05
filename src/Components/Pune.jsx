import React from "react";

const  Pune=(props)=>{
    return(
        <tr>
            <th scope="row" class="text-start">Pune</th>
            <td>{props.feels5}<sup><span>&#8451;</span></sup></td>
            <td>{props.humid5}%</td>
            <td>{props.max5}<sup><span>&#8451;</span></sup></td>
            <td>{props.min5}<sup><span>&#8451;</span></sup></td>
            <td>{props.feels5}<sup><span>&#8451;</span></sup></td>
            <td>{props.ws5} Km/hr</td>
          </tr>
    )
}

export default Pune;