import { useState } from "react";
const Home = () => {
    // let name='Pesho';
const[name, setName]=useState('Pesho');
const[age, setAge]=useState(25);

const handleClick= () =>{
    // name='Alex';
    // console.log(name);
    setName('Alex');
    setAge(39);
}


    return ( 
        <div className="home">
            <h2>Home page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;

//e event object

