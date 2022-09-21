import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/login';
import NotFound from "../pages/404"

export default function AppRoute() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
