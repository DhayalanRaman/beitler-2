import React from 'react';
import './App.scss';
import LoginContainer from './Components/login/LoginContainer';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './Components/dashboard/DashBoard';
import OrderList from "./Components/Tables/Order/OrderList";
import Lookup from './Components/Tables/LookUp/Lookup';
import Customer from './Components/Tables/Master/Custemers';
import Header from './Components/dashboard/Header';
import Rule from './Components/Tables/Rule1/Rule';
import EventTable from './Components/Event/Table';
import Template from './Components/Template/Table';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route
          path="/dashboard"
          element={
            <Header>
              <DashBoard />
            </Header>}
        />
        <Route path="/orderlist" element={<Header><OrderList /></Header>} />
        <Route path="/template" element={<Header><Template /></Header>} />
        <Route path="/rules" element={<Header><Rule /></Header>} />
        <Route path="/customer" element={<Header><Customer /></Header>} />
        <Route path="/event" element={<Header><EventTable /></Header>} />
        <Route path="/lookup" element={<Header><Lookup /></Header>} />
      </Routes>
    </div>
  );
}

export default App;