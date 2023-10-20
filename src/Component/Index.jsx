import './index.css'

function Index(props) {

  return (
    <div>
       
       <div class="card" style={{ width:'18rem' }}>
       <img src={props.images[0]} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    Price: 
    <a href="#" class="btn btn-primary">${props.price}</a>
    <p>DiscountPrice: $ {props.discountPercentage}</p>
    <button className='btn btn-warning'>Details</button>
  </div>
</div>
        

        
    </div>
  )
}

export default Index