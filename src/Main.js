import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import WaterProps from './pages/WaterProps';
import WaterCycle from './pages/WaterCycle';
import CarbonCycle from './pages/CarbonCycle';
import HumanImpact from './pages/HumanImpact';
import ClimateChange from './pages/ClimateChange';

const Main = () => {
	return (
		<Routes> {/* The Switch decides which element to show based on the current URL.*/}
			<Route path='/' element={<Home/>}></Route>
			<Route path='/WaterProps' element={<WaterProps/>}></Route>
			<Route path='/WaterCycle' element={<WaterCycle/>}></Route>
			<Route path='/CarbonCycle' element={<CarbonCycle/>}></Route>
			<Route path='/HumanImpact' element={<HumanImpact/>}></Route>
			<Route path='/ClimateChange' element={<ClimateChange/>}></Route>
		</Routes>
	);
}

export default Main;