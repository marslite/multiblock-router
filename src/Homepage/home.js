import React, { useState, useEffect } from "react";
import Navbar from "../Nav/nav";

import "./home.css";
import Footer from "../Footer/footer";

function HomePage() {
    const [domainOne, setDomainOne] = useState("");
    const [websiteArray, setWebsiteArray] = useState([]);
    // const [domainTwo, setDomainTwo] = useState('');
    const [file, setFile] = useState(null);
    const [domains, setDomains] = useState([]);

    // const domains
    let canFileUpload = false;

    const handleSubmit = async () => {
        // event.preventDefault();
        let updateDomains = [...domains];

        // if (domainOne !== "") {
        //     //Storing all the submitted domains inside domains[]
        //     const domainOneRefined = domainOne.toLowerCase();
        //     const conformURL = domainOneRefined
        //         .replace(/^https?:\/\//, "")
        //         .replace(/^www\./, "")
        //         .replace("/", "")
        //         .toLowerCase();
        //     updateDomains = [...updateDomains, conformURL];
        //     // updateDomains.push(conformURL);

        //     // setDomains(updateDomains);
        //     // setDomainOne('');
                
        //                 const parsedWbs = [...updateDomains];
        //                 setWebsiteArray(parsedWbs);


                        
        //                 const finalWebArrays =updateDomains.map((web) => ({web}));
                        
        //                 // const finalWebArrays = parsedWbs.map((web) => ({
        //                     //     web
        //                     // }));
                            
        //                     console.log("Final Result: ", finalWebArrays);
        //                     console.log("JSON for Final: ", JSON.stringify(finalWebArrays));
                            
                            
                            
        //                     try {
        //                         const response = await fetch("http://192.168.0.2:3000/api/links", {
        //                             method: "POST",
        //                             mode: "cors",
        //                             headers: {
        //                                 "Content-Type": "application/json",
        //                                 "Access-Control-Allow-Origin": "*",
        //                             },
        //                             body: JSON.stringify(finalWebArrays),
                                    
        //                         });
                                
        //                         setDomainOne("");
        //                         setDomains([]);
                                
        //                         if (!response.ok) {
        //                             throw new Error(
        //                                 `That ass-shaped of Anshul forgot to turn on the server`
        //                                 );
        //                             }
                                    
        //                             setDomainOne("");
        //                             setDomains([]);
                                    
        //                         } catch (error) {
        //                             console.error(
        //                                 `Error in sending data, guess you have to watch all these naughty websites ${finalWebArrays.toString}`,
        //                                 error.message
        //                                 );
        //                             }
                                    
                                    
        //                         }

        // setDomains("");
        if (domainOne !== "") {
            const domainOneRefined = domainOne.toLowerCase()
                .replace(/^https?:\/\//, "")
                .replace(/^www\./, "")
                .replace(/\//, "")
                .toLowerCase();

            // Update the domains array
            const newDomains = [...domains, domainOneRefined];

            // Create the payload
            const finalWebArrays = newDomains.map((web) => (web));


            console.log("Final Result: HERE: ", finalWebArrays);
            // console.log("JSON for Final: ", newDomains);
            
            // Attempt to send the new domains array to the server
            try {
                const response = await fetch("http://192.168.0.2:3000/api/links", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                    },
                    body: JSON.stringify(finalWebArrays),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // If the request was successful, reset the domain input and the domains array
                setDomainOne("");
                setDomains([]);

            } catch (error) {
                console.error("Error in sending data: ", error);
            }
        }


    }


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };



    return (
        <div>
            <div className="site-wrapper">
                <div className="web-wrap">
                    <div className="web-container">
                        <div class="alert alert-danger" role="alert">
                            Ensure the Multiblock router is properly wired to
                            your laptop{" "}
                            <a href="#" class="alert-link">
                                FAQs
                            </a>
                            .
                        </div>

                        <div class="card text-bg-secondary ">
                            <div class="card-header">Domain Block</div>
                            <div class="card-body">
                                <h5 class="card-title">
                                    Enter Domains to block
                                </h5>
                                {/* <p class="card-text">Enter Domains.</p> */}
                                {/* <input className='input' type="text" value={domainOne} onChange={(e) => setDomainOne(e.target.value)}  /> */}
                                <div>
                                    <div class=" input-group mb-3">
                                        <span
                                            class="input-group-text"
                                            id="inputGroup-sizing-lg"
                                        >
                                            URLs
                                        </span>
                                        <input
                                            type="text"
                                            class="form-control form-edit"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg"
                                            value={domainOne}
                                            onChange={(e) =>
                                                setDomainOne(e.target.value)
                                            }
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-warning mt-2 btn-d"
                                        onClick={handleSubmit}
                                    >
                                        <b>Block URL</b>
                                    </button>
                                </div>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>

                        {canFileUpload && (
                            <div>
                                <div className="input-group">
                                    <label>
                                        Upload File: (Inser Link without HTTP){" "}
                                    </label>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        accept=".txt"
                                        disabled={domainOne !== ""}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;


