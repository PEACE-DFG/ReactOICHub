import React from 'react'
import Index from '../Component/Index'


function Home() {
  const user ={
    name:'Mr Jonathan',
    age:'35 years',
    job:'Web developer',
    class:'REACT JS'
  }
  return (
    <div>
      {/* <Index name={user.name} age={user.age}/> */}
      {/* should in case the datas are much use spread operator */}
      <Index {...user}/>
    </div>
  )
}

export default Home