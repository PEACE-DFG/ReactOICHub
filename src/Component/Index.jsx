import React from 'react'
import './index.css'
// import gate from './style.module.css'

function Index() {
    // Javascript
    // const styles={
    //     backgroundColor:'blue',
    //     color:'white',
    //     textAlign:'center'
    // }
  return (
    <div>
        {/* background-color:red */}
        {/* <h1 style={{ backgroundColor:'red',color:'white',textAlign:'center'  }}>CHILD</h1>
        {console.log(3+3)}

        <h2 style={styles}>
            INTERNAL CSS
        </h2>
        <div className='box'>

        </div>

        <div className={gate.top}>

        </div>
        <div>
            <h1 className={gate.text}>
               APPLICATION OF MODULES FOR STYLING 
            </h1> 
        </div>*/}
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2023/07/05/11/14/alpaca-8108043_1280.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/08/16/19/38/savannah-sparrow-8194943_1280.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/09/04/08/54/sea-lion-8232312_1280.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Index