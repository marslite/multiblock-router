import React, { useState } from 'react';
import Footer from "../Footer/footer";
import './index.css'; // Import the CSS file for styling

function Focus() {
  const [textBox1Value, setTextBox1Value] = useState('');
  const [textBox2Value, setTextBox2Value] = useState('');
  const [textBox3Value, setTextBox3Value] = useState('');
  const [startingTime, setStartingTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [websitesArray, setWebsitesArray] = useState([]);
  const [timePeriod, setTimePeriod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleTextBox1Change = (event) => {
    setTextBox1Value(event.target.value);
    setStartingTime(event.target.value);
  };

  const handleTextBox2Change = (event) => {
    setTextBox2Value(event.target.value);
    setEndingTime(event.target.value);

  };

  const handleTextBox3Change = (event) => {
    setTextBox3Value(event.target.value);
  };

  const handleSubmitLink = async (event) => {
    event.preventDefault();

    const dataToT = {
      websitesArray: websitesArray,
      startingTime: startingTime,
      endingTime: endingTime
    }
    console.log(dataToT);

    try {
      const response = await fetch('http://localhost:3000/api/focus-model/', {
        method: 'POST', // Specify the method as POST
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(dataToT),
      });
      if (!response.ok) {
        throw new Error(`Where you expecting somethong: ${response.status}`)

      }


    } catch (error) {
      console.error("Error in sending data:", error);
    }

    setWebsitesArray('');


  }

  const handleSubmit = async () => {
    // Check if both time values are in the correct format before submitting
    if (/^\d{2}:\d{2}$/.test(textBox1Value) && /^\d{2}:\d{2}$/.test(textBox2Value)) {
      // Extract hours and minutes from the time values
      const startTime = textBox1Value.split(':');
      const endTime = textBox2Value.split(':');

      // Check if minutes are either '00' or '30'
      const isValidMinutes = (minutes) => {
        return minutes === '00' || minutes === '30';
      };

      // Validate minutes format
      if (isValidMinutes(startTime[1]) && isValidMinutes(endTime[1])) {

        // Convert hours and minutes to minutes for easier comparison
        const startMinutes = parseInt(startTime[0]) * 60 + parseInt(startTime[1]);
        const endMinutes = parseInt(endTime[0]) * 60 + parseInt(endTime[1]);

        // Check if the starting time is earlier than the ending time
        if (startMinutes < endMinutes) {

          // Parse the string, eliminate leading 'www.', and save in array
          const parsedWebsites = textBox3Value
            .split(' ')
            .map(website => website.replace(/^www\./, ''));

          setWebsitesArray((prevWebsitesArray) => {
            console.log('Previous Websites Array:', prevWebsitesArray);
            console.log('Updated Websites Array:', parsedWebsites);
            return parsedWebsites;
          });


          // You can perform any actions with the values of the text boxes here
          //console.log('TextBox 1 Value:', textBox1Value);
          //console.log('TextBox 2 Value:', textBox2Value);
          //console.log('TextBox 3 Value:', textBox3Value);

          // Build and return an array of JSON objects
          const resultArray = parsedWebsites.map(parsedWebsite => ({
            domainName: parsedWebsite,
            startTime: textBox1Value,
            endTime: textBox2Value,
            // startTime: startingTime,
            // endingTime: endingTime,

          }));

          console.log(`Start time: ${startTime.join(':')}`);
          console.log(`Ending time: ${endingTime}`);

          // You can perform any actions with the values of the text boxes here
          console.log('Result Array:', resultArray);

          setWebsitesArray(parsedWebsites);
          let testTimeCount = (endMinutes - startMinutes);
          //In case we need the minutes cast
          console.log(testTimeCount, "Checking here the time control")

          try {
            const response = await fetch('http://localhost:3000/api/focus-model/', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
              body: JSON.stringify(resultArray),
            });

            if (!response.ok) {
              throw new Error(`Server returned an error: ${response.status} ${response.statusText}`);
            }

            // Continue with your logic for a successful response if needed

          } catch (error) {
            console.error('Error in sending data:', error.message);
          }





          setErrorMessage(''); // Clear any previous error message
        } else {
          setErrorMessage('Please make sure the starting time is earlier than the ending time');
        }

      } else {
        setErrorMessage('Please make sure minutes are in the format 00 or 30');
      }
    }
    else {
      setErrorMessage('Please make sure both time values are in the format HH:mm (e.g., 12:34)');
    }

  };

  return (
    <div className="focus-container">
      <h1>Testing Focus</h1>

      {/* Third, longer text box */}
      <input
        type="text"
        placeholder="Enter the websites address Separated with Space(' ')"
        value={textBox3Value}
        onChange={handleTextBox3Change}
        className="long-text-box"
      />


      {/* First text box */}
      <input
        type="text"
        placeholder="Enter Start Time (00:00)"
        value={textBox1Value}
        onChange={handleTextBox1Change}
        className="text-box"
      />

      {/* Second text box */}
      <input
        type="text"
        placeholder="Enter End Time (00:00)"
        value={textBox2Value}
        onChange={handleTextBox2Change}
        className="text-box"
      />

      {/* Submit button */}
      <button onClick={handleSubmit} className="submit-button">Submit</button>
      {/* <button onClick={handleSubmitLink} className="btn btn-danger wt-100">Upload</button> */}

      {/* Display error message, if any */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <Footer />
    </div>
  );
};

export default Focus;