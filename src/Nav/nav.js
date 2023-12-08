import "./nav.css"


import React from "react";
import WebFont from "webfontloader";



function Navbar(){




    const handleParentalControl = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/toggle-internet/', {
                mode:"cors",
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });

            if(!response.ok){
                throw new Error(`Where you expecting something? ${response.status}`)
            }
            
        } catch (error) {
            console.error("Error in sending data:", error)
            
        }


        


    }

    return(
        <div className="nav-cl">


        {/* <nav className="navbar navbar-dark bg-dark nav-ex">
            <a className="navbar-brand btn " href="#">Multiblock</a>
            <button className="btn btn-ed" style={{"background":"purple"}} >
            <a className="navbar-brand tx-pos " href="#/focus">Focus mode</a>
            </button>

            <button className="btn btn-ed btn-warning"  >
            <a className="navbar-brand tx-pos" href="http://127.0.0.1:8000/admin/" target="_blank" rel="noopener nonreferrer" >Admin Panel</a>
            </button>

            <button className="btn btn-ed" style={{"background":"purple"}} >
            <a className="navbar-brand tx-pos " onClick={handleParentalControl}>Parent Control</a>
            </button>

        </nav>  */}

        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                {/* <a class="navbar-brand">Navbar</a> */}

                <a className="navbar-brand btn sp-fc" href="#">Multiblock</a>
                <button className="btn btn-ed btn-warning"  >
                     <a className="navbar-brand tx-pos " href="#/focus">Focus mode 💡</a>
                </button>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault"><span className="switch-d ">Deactivate Internet</span></label>
                </div>

                <button className="btn btn-ed btn-danger"  >
                    <a className="navbar-brand tx-pos" href="http://127.0.0.1:8000/admin/" target="_blank" rel="noopener nonreferrer" >Admin Panel ⚙️</a>
                </button>

            </div>
        </nav>


        </div>
    


    );
}

export default Navbar;