import React, { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openBookingModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
    setSelectedService('');
  };

  return (
    <BookingContext.Provider value={{ isOpen, openBookingModal, closeBookingModal, selectedService }}>
      {children}
      <BookingModal 
        isOpen={isOpen} 
        onClose={closeBookingModal} 
        initialService={selectedService} 
      />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
