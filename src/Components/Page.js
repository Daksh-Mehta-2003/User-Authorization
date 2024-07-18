import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Page.css";

const Page = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/Signup');
  };

  const goToManagerPage = () => {
    navigate('/ManagerPage');
  };

  return (
    <div className='containerrr'>
      <div className='Texttt'>
      <h1>Welcome to Avanseus</h1>
      </div>
      <div className='buttonnn'>
      <button type="submit" onClick={goToSignup} >Employee</button>
      <button type="submit" onClick={goToManagerPage}>Manager</button>
      </div>
    </div>
  );
}

export default Page;

