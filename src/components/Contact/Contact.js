import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";

function Contact() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber:"",
    description:""
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};

    if (!email) validationErrors.email = "Email is required";
     if (!phoneNumber) validationErrors.phoneNumber = "Phone number is required";
    if (!description) validationErrors.description = "Description is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Assuming form is valid at this point
    toast.success("Form submitted successfully");

    // TODO: Make an API call to send email to admin
    // Example: await sendEmailToAdmin(email, address, address2, city, state);

    // Reset form fields and errors
    setEmail("");
  
   
    setDescription("");
    setPhoneNumber("");
    setErrors({});
    //email message sent
    emailjs
      .sendForm(
        "service_qo14xx4",
        "template_5pqtbie",
        e.target,
        "Pgfj9nr8g8lXbzKr5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MDBFooter className="text-center" bgColor="white">
      <MDBContainer className="p-5">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </section>

        <section className="">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label >Email</Form.Label>
                <Form.Control
                  type="email"
                  name="form_email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

         
            <Form.Group className="mb-3" controlId="formGridPhoneNumber">
              <Form.Label >Phone Number</Form.Label>
              <Form.Control
                placeholder="Enter phone number"
                name="form_phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                isInvalid={!!errors.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>

            {/* New Description Input */}
            <Form.Group className="mb-3" controlId="formGridDescription">
              <Form.Label >Description</Form.Label>
              <Form.Control
                as="textarea"
                name="form_message"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

           

            <Button variant="primary" type="submit">
              Submit
            </Button>

            {/* React Toastify Toast Container */}
            <ToastContainer />
          </Form>
        </section>
        <br/>
        <section className="mb-4">
          <p>ArshuInfinity team,<br/>
            Phone number: 7358442757,<br/>
            email:arshuinfinity31@gmail.com,<br/>
            address:No.101, 
                    welcome colony, <br/> 
                    santhiya nagar agara road,  
                    chennai - 600126.<br/>
          </p><br/>
          <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn> &nbsp;
      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
        <MDBIcon fab icon='google' />
      </MDBBtn>&nbsp;

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>&nbsp;
      <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
        <MDBIcon fab icon='whatsapp' />
      </MDBBtn>
        </section>
      </MDBContainer>
     
    </MDBFooter>
    
  );
}
export default Contact;
