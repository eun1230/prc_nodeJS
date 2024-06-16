import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState('');

  const sendRequest = async () => {
    try {
      const res = await axios.get('/api');  // 프록시를 통해 요청
      setResponse(res.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div className='App'>
      <h1>{response}</h1>
    </div>
  );
}

export default App;
