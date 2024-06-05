import React from "react";

const Card3=(props)=>{
    return (
        <div class="col">
        <div class="card card1 mb-4 rounded-3 shadow-sm ">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Humidity <img src="../public/images/humidity.png" height="35px" width="35px"/></h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{props.hmdtiy}<small class="text-body-secondary fw-light">%</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Feels like : {props.temp}<sup><span>&#8451;</span></sup></li>
              <li>Humidity : {props.hmdtiy}</li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Card3;
