import { Link } from 'react-router-dom';

import './landingpages.css';

const Landingpage = () => {
 
  

  return (
    <>
      <div className='Lmain'>
        <div className='Lsub1'>
          <div className='wel'><p>Welcome to the</p></div>
          <p className='animated-text'>MUSIC STREAMING SERVICE</p>
          <br></br>
          <p className='text'>Unleash a world of endless music possibilities at your fingertips.</p>
          <br></br>
 
          <div >
          <button className='sign'><Link to="/LoginPage" >SignIn</Link></button>
           
          </div>
        </div>
    
        <div className='Lsub2'>
          <div className='sub-1'>
            <div className="sub-a"></div>
            <div className="sub-b"></div>
          </div>
          <div className='sub-2'>
            <div className='sub-3'></div>
            <div className='sub-4'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landingpage;
