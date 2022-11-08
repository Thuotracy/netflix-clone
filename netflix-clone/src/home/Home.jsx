import Navbar from '../components/navbar/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <img width="100%" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&drp=2&w=500" alt="" />

    </div>
  )
}

export default Home