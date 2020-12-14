import React from 'react';
import BookingForm from "../Forms/BookingForm";
import Title from "../sectionTitle/Title";
import Footer from '../footer/Footer';

const BookRoom = () => {
    return (
        <div className="bookroom">
            <Title header="Book Room"/>
            <BookingForm />
            <Footer />
        </div>
    )
}

export default BookRoom
