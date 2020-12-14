import React from 'react';
import "./Forms.css";
import {Formik,Form} from "formik";
import * as yup from "yup";
import FormControl from './FormControl';
import {Button} from "../Buttons/Button";
const ContactForm = () => {
    
    const initialValues={
        name:"",
        email:"",
        message:"",
        checkin:null
    }
    
    const validationSchema =yup.object().shape({
        name:yup.string().required("required"),
        email:yup.string().email().required("required"),
        message:yup.string().required("required")
    })


    const onSubmit=(values)=>{
        console.log("form date ",values);
    }
    return (
        <div className="contact-form"> 
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            
            >
                <Form>
                    <div className="form-row">
                        <div className="col-md-6">
                            <FormControl control="input" type="text" className="form-control" label="Name"
                                name="name" placeholder="Enter your Name" required="requird"
                            />
                        </div>

                        <div className="col-md-6">
                            <FormControl control="input" type="email" className="form-control" label="Email"
                                name="email" placeholder="Enter your Email" required="requird"
                            />
                        </div>

                    </div>
                    
                    <FormControl control="textarea" name="message" label="Message" className="form-control"
                        placeholder="Message"  
                    />
                   

                    <Button className="btn btn-block mt-4" type="submit">Submit</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm
