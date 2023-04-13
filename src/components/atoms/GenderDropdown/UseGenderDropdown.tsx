import {useState} from 'react';
import React from 'react';

const UseGenderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectGender = (gender: React.SetStateAction<string>) => {
    setSelectedGender(gender);
    setIsOpen(false);
  };
  return {
    isOpen,
    setIsOpen,
    handleOpen,
    selectedGender,
    setSelectedGender,
    handleSelectGender,
  };
};

export default UseGenderDropdown;
