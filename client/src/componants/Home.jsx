
import discuss from "../assets/images/discuss.jpg";

const Home = () => {
     
    return (
        <div className="home-page">
            <div className="bg-blue-300 ">
            <div className="container mx-auto text-center flex py-10 justify-center px-10">
                <img src={discuss} className='w-1/2 mx-auto' alt='center' title='center'  />
                <p className="text-xl m-auto h-full p-10 w-1/2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            </div>  
             <div className="bg-white ">
            <div className="container mx-auto text-center flex py-10 justify-center px-10">
               <p className="text-xl m-auto h-full p-10 w-1/2 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 <img src={discuss} className='w-1/2 mx-auto' alt='center' title='center'  />
            </div>
            </div> 
        </div>
  );
};

export default  Home;