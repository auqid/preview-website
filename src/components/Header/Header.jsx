import reactImg from '../../assets/react-core-concepts.png'
import './header.css'



const reactDescription = ['Fundamental','Crucial','Core']

{/**using a function to get a random number and using that in jsx to get a random value in a array */}
function getRandomInt(max){
    return Math.floor(Math.random()*(max+1))
  }

function Header (){
    const description = reactDescription[getRandomInt(2)];
    return (<header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>)
   }
   {/**object destructuring*/}
   
export default Header