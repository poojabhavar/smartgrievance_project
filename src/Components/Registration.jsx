import './Registration.css';
import data from "../Api/data.json";

export const Registration = () => {
  return (
   <div className='body'>
    {data.map((item,index)=>(
      <div className='card' key={item.id}>
        <img src={item.image}/>
        <h2>{item.title} </h2>
        <h3>{item.subtitle}</h3>
        <a href={item.link} target='_blank'>
          <button>{item.buttonText} </button>
        </a>
      </div>

    ))}
   </div>
  );
};

