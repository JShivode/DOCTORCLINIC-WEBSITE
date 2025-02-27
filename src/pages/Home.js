import React from "react";
import headerimg from '../Assets/doc7.png';


const Home = ()=>{
    return(
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-lg-8'>
                        <h5>Expert Care, Anytime, Anywhere.</h5>
                        <h2>Protect Your Health and Take Care of Your Well-being</h2>
                        <button><a href='#'>Read More</a></button>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                        <img src={headerimg}/>
                    </div>
                </div>
            </div>
        </header>

    )
}




export default Home;