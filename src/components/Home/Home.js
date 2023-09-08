import QRCode from 'qrcode.react';
function Home() {
  return (
    <div>
      <h1>QR Code Generator</h1>
      <QRCode value='https://arshuinfinity.com' />
    </div>
  );

}
export default Home;
