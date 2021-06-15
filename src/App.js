import React, { useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import QrReader from 'react-qr-reader';
import QrCode from 'qrcode';

function App() {
  const [scannedItem, setScannedItem] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedItem(data);
      console.log(data);
    }
  }

  const handleError = (error) => {
    console.log(error);
  }

  const generateQrCode = async () => {
    try {
      const response = await QrCode.toDataURL(url);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <h3>Generate QR code</h3>
      <TextField label='Text' onChange={(e)=> setUrl(e.target.value)}/>
      <Button variant='contained' color='primary' onClick={() => generateQrCode()}> Generate</Button>
      <br/> <br/> <br/>
      {imageUrl ? (<img src={imageUrl} alt="img" />) : null}
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
