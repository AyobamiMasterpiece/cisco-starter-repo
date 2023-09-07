import React, { useState, useEffect } from "react";

export default function Ipshow({ipAddressType}) {
  // Define a state variable to store the IP address
  const [ip, setIp] = useState("Loading..."); // Set an initial value

  // Use the useEffect hook to fetch the IP address when the component mounts
  useEffect(() => {
    async function fetchIpAddress() {
      try {
        const response = await fetch(`https://api64.ipify.org?format=json&ipv=${ipAddressType}`);
        const addressData = await response.json();
        // Update the state with the retrieved IP address
        setIp(addressData.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
        setIp('Error'); // Update the state with an error message
      }
    }

    fetchIpAddress();
  }, []); // The empty dependency array ensures this effect runs only once, when the component mounts

  return <div>{ip}</div>;
}
