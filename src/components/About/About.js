import "./About.css";
document.addEventListener('DOMContentLoaded', () => {
  const aboutElement = document.querySelector('.about');

  // Create a new element to hold the centered content
  const centeredContentElement = document.createElement('div');
  centeredContentElement.className = 'centered-content';
  centeredContentElement.innerHTML = `
    <p>
      ARSHU INFINITY Private limited is a Private incorporated on 4 March 2023.
      <!-- Rest of your content here -->
    </p>
    <span>Director: Arshiya Ambrin</span>
    <span>Company: ARSHU INFINITY Private Limited</span>
    <span>URN: udyam-tn-08-0058331</span>
  `;

  centeredContentElement.addEventListener('mouseover', () => {
    aboutElement.classList.add('hover');
  });

  centeredContentElement.addEventListener('mouseout', () => {
    aboutElement.classList.remove('hover');
  });

  // Append the centered content element to the "about" element
  aboutElement.appendChild(centeredContentElement);
});

function About() {
  return (
    
    <div className="about">
     
      <div className="scrolling-content">

    <p>
      ARSHU INFINITY Private limited is a Private incorporated on 4 March
      2023.<br/>It is classified as Non-Government company and is registered at
      Registrar of company .<br/>It is involved in Legal accounting, book-keeping tax
      consultancy .it's reliable <br/>.Through our company online and offline we are
      conducting. <br/>We are providing fixed income of 6000 to 12000 rupees per
      month by creating videos and completing five levels
    </p>
    <span>Director: Arshiya Ambrin</span><br/>
    <span>Company: ARSHU INFINITY Private Limited</span><br/>
    <span>URN : udyam-tn-08-0058331</span><br/>
    </div>
    </div>
   
  );

}

export default About;
