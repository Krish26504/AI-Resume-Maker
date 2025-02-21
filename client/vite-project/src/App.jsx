import { useState } from 'react'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import {  Route, Routes } from 'react-router-dom';
import { Navigate, Outlet } from'react-router-dom'
import Header from './components/ui/custom/Header'

function App() {
const {user, isLoaded, isSignedIn}=useUser();
if(!isSignedIn&&isLoaded) {
  return <Navigate to={'/auth/sign-in'}/>
}
  return (
 <>
 <Header/>
<Outlet/>
 </>
  )
}

export default App
