import React from 'react'
import Home from './Home'
import CirclesDivs from '../Feature-Elevating/Circlesdiv';
import Smallcircles1 from '../Smallcircles/Smallcriclesdiv1';
import Smallcirclesdiv2 from '../Smallcircles/Smalcirclesdiv2';
import TextImage from '../Text-Images/TextImage';
import Boxes from '../Boxes/Boxes';
import Automation from '../Automatition/Automation';

import DownerPage from './DownerPage';

const MainHome = () => {
  return (
    <div>

        <Home/>
          <DownerPage />
            <CirclesDivs />
            <Smallcircles1 />
            <Smallcirclesdiv2 />
            <TextImage />
            <Boxes />
            <Automation />
    </div>
  )
}

export default MainHome
