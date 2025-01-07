interface HomeProps {
  data?: string;
}

const Home: React.FC<HomeProps> = ({ data = "Default" }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to Midtrans React Mobile</p>
      <p>{data}</p>
    </div>
  );
};

export default Home;
