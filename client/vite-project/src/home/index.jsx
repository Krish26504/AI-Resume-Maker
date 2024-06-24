import Header from '@/components/ui/custom/Header'
import React from 'react'
import { UserButton } from '@clerk/clerk-react'
const Home = () => {
  return (
    <div className='display item float-end'>
        <UserButton/>


        
    </div>
  )
}

export default Home