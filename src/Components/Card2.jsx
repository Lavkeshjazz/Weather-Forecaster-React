import React from "react";

const Card2=(props)=>{
    return (
        <div class="col">
        <div class="card card1 mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Wind & Timings <img src="../images/wind.png" height="35px" width="35px"/></h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{props.wspeed}<small class="text-body-secondary fw-light"> Km/hr</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Wind Speed :{props.wspeed}Km/hr</li>
              <li>Wind Degree :{props.wdegree}<span>&#176;</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Card2;