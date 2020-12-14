import React from 'react';
import {Formik,Form} from "formik";
import * as yup from "yup";
import FormControl from "./FormControl";
import "./Forms.css";
import { Button } from '../Buttons/Button';


 
const smokinkOptions=[
    {key:"please Select " ,value:"Please Select"},
    {key:"yes" ,value:"yes"},
    {key:"No" ,value:"No"}
]
const radiooptions=[
    {key:"yes" ,value:"yes"},
    {key:"No" ,value:"No"}
]

const BookingForm = () => {
   const RoomType=[
       {key:"single",value:"sindle"},
       {key:"double",value:"double"},
       {key:"family",value:"familay"},
       {key:"presidential",value:"presidential"},
   ]
   const Guestes=[
    {key:"1",value:"1"},
    {key:"2",value:"2"},
    {key:"3",value:"3"},
    {key:"4",value:"4"},
    {key:"5",value:"5"},
    {key:"6",value:"6"},
    {key:"10",value:"10"},
]
    const initialValues={
        fullName:"",email:"",
        phone:"",personId:"",
        checkin:null,checkout:null,
        roomtype:"",roomsmoking:"",
        Guests:"",amount:"",
        wifi:"",freeService:""

    }
    const validationSchema=yup.object().shape({
        fullName:yup.string().min('6').required(),
        email:yup.string().email(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
        phone:yup.number().required(),
        personId:yup.number().required(),
        roomtype:yup.string().required(),
        roomsmoking:yup.string().required(),
        Guestes:yup.number().required(),
        amount:yup.number().required(),
        wifi:yup.string().required(),
        freeService:yup.string().required()
    })
    const OnSubmit=(values,onPropsSubmit)=>{
        console.log(values);
        onPropsSubmit.resteForm();
    }
    return (
        <div className="bookingfroom">
           <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={OnSubmit}
                        >
                            <Form>
                    <div className="row">
                        <div className="col-md-6">
                            <FormControl control="input" type="text" label="fullName " name="fullName" className="form-control"/>
                        </div>
                        <div className="col-6">
                            <FormControl control="input" type="email" label="Email" name="email" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <FormControl control="input" type="text" label="Phone Number " name="phone" className="form-control"/>
                        </div>
                        <div className="col-6">
                            <FormControl control="input" type="text" label="Person Id" name="personId" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <FormControl control="date" label="Check-in date " name="checkin" className="form-control"/>
                        </div>
                        <div className="col">
                            <FormControl control="date" label="Check-out date " name="checkout" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <FormControl control="select" label="Room type " name="roomtype" options={RoomType} className="form-control" />
                        </div>
                        <div className="col">
                            <FormControl control="select" label="room Smoking " name="roomsmoking" options={smokinkOptions} className="form-control" />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                            <FormControl control="select"  label="Number of Guests in Room " name="Guests"  options={Guestes} className="form-control gueste " />
                        </div>
                        <div className="col-12">
                            <FormControl control="input" type="number" min="100" label="Total Amount" name="amount"   className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <FormControl control="radio" label="Lease Pocket Wifi ($5) " name="wifi" options={radiooptions}/>
                        </div>
                        <div className="col">
                            <FormControl control="radio" label="Free Shuttle Service " name="freeService" options={radiooptions} />
                        </div>
                    </div>
                    
                    <Button type="submit" className="btn-block"> Send </Button>
                </Form>
                        </Formik>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default BookingForm
