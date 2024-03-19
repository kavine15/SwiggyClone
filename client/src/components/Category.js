import React from 'react'
import '../App.css'

function Home() {
  return (
    <div className='home-container'>
         <h2>What's on your mind?</h2>
         <br/>
         <div className='catcontainer'>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Puttu.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Appam.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/cbb85a3c1684891105294d11f8359996' alt=''/></div>
            <div className='item'><img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png' alt=''/></div>
         </div>
         <br/>
         <br/>
         <hr/>
         <br/>
         <br/>
         <br/>
                    <h2>Top restaurant chains in India !</h2>
                    <br/>
    </div>   
  )
}

export default Home