
const RouterLayout = () => {
     
    return (
    <>
       <h2>test in the routerlayout</h2>
      
    </>
  );
}

const Layout = () => {
    
   
          
  return (
      <>
          this is layout
       
          
    </>
  )
};

const Home = () => {
     
  return <h1>Home</h1>;
};

const Blogs = () => {
  console.log("this is test");
  return <h1>Blog Articles</h1>;
};

const Contact = () => {
  return <h1>contact</h1>;
};

export { RouterLayout,Layout,Home,Blogs,Contact };