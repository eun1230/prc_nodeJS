
import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const sendRequestToServer = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        console.log('Server response:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    sendRequestToServer();
  }, []);

  return (
  <div>
    ${data}
  </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
