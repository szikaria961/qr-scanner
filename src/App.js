import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import QrReader from 'react-qr-reader';

function App() {
  const [scannedItem, setScannedItem] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedItem(data);
      console.log(data);
    }
  }

  const handleError = (error) => {
    console.log(error);
  }
  return (
    <Container>
      <h3>Scan a QR code using your Webcam</h3>
      <QrReader 
        delay={300}
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
        />
      <h3>Scanned Code: {scannedItem}</h3>
    </Container>
  );
}

export default App;
