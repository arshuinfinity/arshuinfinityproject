import QRCode from "qrcode.react";
import "./Home.css";
function Home() {
  return (
    <div className="centered">
      <h1>ArshuInfinity Website</h1>
      <QRCode value="http://www.arshuinfinity.com/" />
      <p>
        Scan the QR code above or visit the website{" "}
        <a href="http://www.arshuinfinity.com/">www.arshuinfinity.com</a>
      </p>
    </div>
  );
}
export default Home;
