// component one
const First = () => {
  return <div className="">This is my first component</div>;
};
const Seconnd = () => {
  return (
    <div className="">
      <h1>second component</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App text-red-500">
      <First />
      Wel came
      <Seconnd />
    </div>
  );
}

export default App;
