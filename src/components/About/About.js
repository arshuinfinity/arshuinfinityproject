import "./About.css";

document.addEventListener('DOMContentLoaded', () => {
  const aboutDiv = document.querySelector('.about');
  const scrollingContent = document.querySelector('.scrolling-content');
  let animationPaused = false;

  // Function to pause the scrolling animation
  function pauseScrollingAnimation() {
    scrollingContent.style.animation = 'none';
  }

  // Function to resume the scrolling animation
  function resumeScrollingAnimation() {
    scrollingContent.style.animation = 'scrollRightToLeft 40s linear infinite';
  }

  // Add mouseenter event listener to the "about" div
  aboutDiv.addEventListener('mouseenter', () => {
    console.log('Mouse entered "about" div');
    animationPaused = true;
    pauseScrollingAnimation();
  });

  // Add mouseleave event listener to the "about" div
  aboutDiv.addEventListener('mouseleave', () => {
    console.log('Mouse left "about" div');
    animationPaused = false;
    if (!animationPaused) {
      resumeScrollingAnimation();
    }
  });


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
    <span>Company: ARSHU INFINITY Private Limited</span>
    <span>URN : udyam-tn-08-0058331</span><br/>
    
    </div>
    </div>
   
  );

}


export default About;
