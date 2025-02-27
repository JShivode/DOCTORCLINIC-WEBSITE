import React from "react";
import headerimg from '../Assets/doc7.png';
import './Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquare} from '@fortawesome/free-solid-svg-icons'


const Home = ()=>{
    return(
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <h5>Expert Care, Anytime, Anywhere.</h5>
                        <h2>Protect Your Health and Take Care of Your Well-being</h2>
                        <button><a href='#'>Read More</a></button>
                        <span>+</span>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div classame='header-box'>
                             <img src={headerimg}/>
                             <FontAwesomeIcon icon={faSquare}/>
                        </div>   
                    </div>
                </div>
            </div>
        </header>

    )
}




export default Home;