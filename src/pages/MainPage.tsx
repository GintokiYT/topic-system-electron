import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';

const MainPage = () => {
  return (  
    <div className='container'>
      <img src={Logo} alt="Logo" />
      <h1 className='title'>TOPIC <span>SYSTEM</span></h1>
      <h2 className='subtitle'>Innovando para tu bienestar</h2>
      <Link to='/login' className='button-ingresar'>Ingresar</Link>
    </div>
  );
}
 
export default MainPage;