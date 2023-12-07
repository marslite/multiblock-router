import React, { useState, useEffect } from 'react';
import Navbar from '../Nav/nav';

import "./home.css"
import Footer from '../Footer/footer';

function HomePage(){
  const [domainOne, setDomainOne] = useState('');
  const [websiteArray, setWebsiteArray] = useState([]);
  // const [domainTwo, setDomainTwo] = useState('');
  const [file, setFile] = useState(null);
  const [domains, setDomains] = useState([]);

  // const domains
  let canFileUpload = false;



  

  const handleSubmit = async () => {
    // event.preventDefault();
    let updateDomains = [...domains]

    if(domainOne !== ''){
      //Storing all the submitted domains inside domains[]
      const domainOneRefined = domainOne.toLowerCase();
      const conformURL = domainOneRefined.replace(/^https?:\/\//, '').replace(/^www\./,'').replace(
        '/','').toLowerCase();
        updateDomains = [...updateDomains, conformURL];
        
      setDomains(updateDomains);
    }

    const parsedWbs = [...updateDomains]
    setWebsiteArray(parsedWbs);

    const finalWebArrays = parsedWbs.map(web => ({
      domainName: web,
    }))

    console.log("Final Result: ", finalWebArrays);


    setDomainOne('');


    try {
      const response = await fetch('http://localhost:3000/api/home', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(finalWebArrays),
      });

      if(!response.ok){
        throw new Error(`That ass-shaped of Anshul forgot to turn on the server`)
      }


    } catch (error) {
      console.error(`Error in sending data, guess you have to watch all these naughty websites ${finalWebArrays.toString}`, error.message)
      
    }
  };




  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <div className='site-wrapper'>
        <div className='web-wrap'>
        <div className="web-container">
        <div class="alert alert-danger" role="alert">
          Ensure the Multiblock router is properly wired to your laptop <a href="#" class="alert-link">FAQs</a>.
        </div>


                    {/* <div className='dom-block'>
                      <h1>Router App - Domain Blacklist</h1>

                      <div className="input-group">
                        <label>Domain 1:</label>
                        <input 
                          type="text" 
                          value={domainOne} 
                          onChange={(e) => setDomainOne(e.target.value)} 
                          />
                      </div>

                   </div> */}


                   <div class="card">
                    <div class="card-header">
                      Domain Block
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Enter Domains to block</h5>
                      {/* <p class="card-text">Enter Domains.</p> */}
                        {/* <input className='input' type="text" value={domainOne} onChange={(e) => setDomainOne(e.target.value)}  /> */}
                        <div>
                        <div class=" input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-lg">URLs</span>
                        <input type="text" class="form-control form-edit" aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-lg" value={domainOne} onChange={(e) => setDomainOne(e.target.value)} />
                            </div>
                            <button type="submit" className='btn btn-danger mt-2 btn-d' onClick={ handleSubmit}>
                        <b>Submit</b>
                        </button>
                        </div>
                      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>


                   



    

                      {/* <div className="input-group">
                        <label>Domain 2:</label>
                        <input 
                          type="text" 
                          value={domainTwo} 
                          onChange={(e) => setDomainTwo(e.target.value)} 
                        />
                      </div> */}
                  {canFileUpload && <div>

                      <div className="input-group">
                        <label>Upload File: (Inser Link without HTTP) </label>
                        <input 
                          type="file" 
                          onChange={handleFileChange} 
                          accept=".txt"
                          disabled={domainOne !== ''}

                          
                        />
                      </div>
                  </div>}
                      {/* <button type="submit" className='btn btn-danger mt-2 btn-d' onClick={(event)=>{ handleSubmitLink(event)  }}> */}
                      {/* <button type="submit" className='btn btn-danger mt-2 btn-d' onClick={ handleSubmit}>
                        <b>Submit</b>
                        </button> */}
                      {/* </form> */}

                      </div>

        </div>
        <Footer/>



      </div>




</div>
   
  );
};

export default HomePage;