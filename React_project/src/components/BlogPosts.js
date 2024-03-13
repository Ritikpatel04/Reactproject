import {useEffect ,useState} from 'react'
import axios from 'axios'
export default function BlogPosts(){

    const [userData, setdata]= useState([]);

    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>{
      
         console.log(response);
         setdata(response.data);

        

      })

      
    
    },[]);
          
    return(

     <>
      <div  className="container">
        <div className='row'>
           

            {

userData.map((data)=>{
 return(
  
<div className='col-md-4' key={data.id}>
      <div className='card mb-2 mt-2' > 
           <div className='card-body'>
                 <h5 className='card-title'>{data.title}</h5> 
                 <h6 className='card-subtitle mb-2'>{data.body}</h6>
                     <p className='card-text text-muted' >mon, 21 dec 2022 12:00 IST</p>

                     <img src='https://fakeimg.pl/600x400' className='img-fluid' alt='random'/>

           </div>


           </div>

    </div>


 );

})
}

  </div>
       
      </div>
     
     </>

    );
}