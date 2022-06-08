import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/iu/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />

                <Route path="search" element={<SearchScreen />} />
                <Route path="hero/:heroeId" element={<HeroScreen />} />

                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </div>
    </>
  )
}