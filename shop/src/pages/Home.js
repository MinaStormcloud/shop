import cakeImage from '../assets/images/joshua-glass.jpg';

export default function Home({ children }) {
  return <>
      

    <div className="profile-container">
        <h2>Welcome to Westside Belle Cakery!</h2>
        <img src={cakeImage} alt="Cake" className="cake-image" /> 
                       
    </div>    
  </>

}