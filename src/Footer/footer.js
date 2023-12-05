
import "./footer.css"

function Footer(){


    return(

        <div>
            <footer className="footer-d">
                <ul class="nav nav-ed ">
                    <li class="nav-item">
                        <a class="nav-link active btn btn-warning btn-supp" aria-current="page" href="#">About</a>
                     </li>
            
            <li class="nav-item">
            <a class="nav-link" href="#">Mattia</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Anshul</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Clover</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Martin</a>
            </li>

            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Copyright© 2023</a>
            </li>

        </ul>


        </footer>
        </div>
    );
    
}


export default Footer;