import React from "react";


const FormContact =()=>{
    return(
        <form>
            <div className="form-control">
                <input placeholder="Your Name"/>
            </div>
            <div className="form-control">
                <input placeholder="Your Email"/>
            </div>
            <div className="form-control">
                <input placeholder="Phone Number"/>
            </div>
            <select>
                <option>Select Department</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
            <div className="form-control">
                <textarea placeholder="Message"></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}


export default FormContact;