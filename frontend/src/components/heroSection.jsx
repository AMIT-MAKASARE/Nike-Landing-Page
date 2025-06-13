export const HeroSection = () => {
    return ( 
        <>
          <div className="heroSection ">
            <div className="texts">
             <span className="mainHeading ">YOUR FEET DESERVE THE BEST</span> <br />
             <span className="subHeading">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</span>
             <div className="heroBtns">
                <button className="shopNowBtn text-white">Shop Now</button>
                <button className="categoryBtn">Category</button>
             </div>
             <div className="socialMedia">
                <span>Also Available On</span>
                <div className="socailMediaimgs">
                  <img src="src\img\4331d1d3fe15236a1a9843e35f7b3b8467e998ff.png" alt="" />
                  <img src="src\img\9669ba8f4f98c0bc6952e9281673372fcb16cfc0.png" alt="" />
                 </div>
             </div>
            </div>
            <div className="mainImg">
                <img className="shoeImg" src="src\img\shoe_image.png" alt="shoes" />
            </div>
          </div>
        </>
     );
}