import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { logOut } from '../../Actions/authActions';
import { toast } from "react-toastify";


function Logouts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logOut());
    localStorage.removeItem("token")
    navigate("/")
    toast.success("logout success")
  };
  return (
    <Link to="/login" className='logout' onClick={handleClick}>Log out</Link>
  );
}

export default Logouts;