// const hero  = () => {
//     return <main className="hero container">
//         <div className='hero-content'></div>
//         <h1>YOUR FEET DESERVE THE BEST</h1>
//         {/* <p>your feet deserve the best of the best
//             your feet deserve the best of the best
//             your feet deserve the best of the best
//             your feet deserve the best of the best </p> */}
//             <div className="hero-button">
//                 <button> Shop Now</button>
//                   <button> Category</button>
//             </div>

//             <div className="shopping">
//                 <p>Also available on</p>
//                 <div className="brand-icons">
//                     <img src="./images/amazon.png" height="50"  alt="Amazon" />
//                     <img src="./images/flip.png"  height="50"  alt="Flipkart" />
                    
//                 </div>
//             </div>
//         <div className='hero-image'>
//               <img src="public\images\nike-valentines-day-2.png" height="50"  alt="hero-image" />

//         </div>
//     </main>
// };

// export default hero;

const Hero = () => {
  return (
    <main className="hero container">
      
      <div className="hero-content" >
        <h1 >YOUR FEET DESERVE THE
             BEST</h1>
        <p>
          your feet deserve the best of the best your feet deserve the best of the best<br />
          your feet deserve the best of the best your feet deserve the best of the best
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
          <p >Also available on</p>
          <div className="brand-icons">
            <img src="./images/amazon.png" height="50" alt="Amazon" />
            <img src="./images/flip.png" height="50" alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="public/images/nike-valentines-day-2.png"
          height="400"
          alt="hero-image"
        />
      </div>
    </main>
  );
};
export default Hero;

