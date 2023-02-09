import React from 'react'

export default function Carousal() {
  return (
    <>
    <div>Carousal</div>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={"pic"}
       className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"pic"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={"pic"} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</>
  )
}
