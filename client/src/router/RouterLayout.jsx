
const RouterLayout = () => {
     
    return (
      <>
      <Layout/>
    </>
  );
}

const Layout = () => {
  console.log("printed once");
  return (
    <>
    <h2>
      this is layout
    </h2>

      </>
  );
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