import React from "react";

const Card1=(props)=>{
    return (
        <div class="col">
        <div class="card card1 mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Temperatures <img src="../images/temperature-sensor.png" height="35px" width="35px" /></h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{props.temp}<small class="text-body-secondary fw-light"><sup><span>&#8451;</span></sup></small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Minimum Temperature : {props.mintemp}<sup><span>&#8451;</span></sup></li>
              <li>Maximum Temperature : {props.maxtemp}<sup><span>&#8451;</span></sup></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Card1;