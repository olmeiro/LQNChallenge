import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomeSwapi } from '../components/HomeSwapi'
import { Navbar } from '../components/Navbar'
import { NotFound } from '../components/NotFound'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <section>
        <Routes>
          <Route path='/' element={<HomeSwapi />}/>
          <Route path=':personId' element={<HomeSwapi />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </>
  )
}