import React, { useContext } from 'react';

import { globalContext } from './App';
import DashBoard from './DashBoard';
import SignUp from './SignUp';

 export default function Home() {
  const {globalIsLogin}=useContext(globalContext);
  return (
    <div>
      {globalIsLogin?<DashBoard/>:<SignUp/>}
    </div>
  );
}


