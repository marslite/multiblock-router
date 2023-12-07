import React, { useState } from 'react';
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

  // const handleSubmitLink = async (event) => {
  //   event.preventDefault();
  //   // console.log(TESST)
  //   handleSubmit(event)

  //   const dataToT = {
  //     websiteArray: websiteArray,
  //     domains: domains
  //   }

  //   // console.log(`${domains} check here`)

  //   try {
  //     const response = await fetch('http://192.168.0.2:3000/api/links', {
  //       method: 'POST',
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify(dataToT),
  //     });

  //     if(!response.ok){
  //       throw new Error(`Where you expecting somethoing? ${response.status} `)
  //     }

  //   } catch (error) {
  //     console.error("Error in sending data:", error)
  //   }


  //   setDomainOne('');

  // }

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
  };




  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <div className='site-wrapper'>
        <div className='web-wrap'>
        <div className="web-container">


                      <h1>Router App - Domain Blacklist</h1>
                      {/* <form onSubmit={handleSubmit}> */}
                      <div className="input-group">
                        <label>Domain 1:</label>
                        <input 
                          type="text" 
                          value={domainOne} 
                          onChange={(e) => setDomainOne(e.target.value)} 
                        />
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
                      <button type="submit" className='btn btn-danger mt-2 btn-d' onClick={ handleSubmit}>
                        <b>Submit</b>
                        </button>
                      {/* </form> */}

                      </div>

        </div>
        <Footer/>



      </div>




</div>
   
  );
};

export default HomePage;