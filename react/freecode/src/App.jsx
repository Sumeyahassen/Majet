const Form = () => {
  const ti = () => {
    setTimeout(() => console.log("line-3"), 1000);
  };
  console.log("line-1");
  ti();
  console.log("line-2");
  console.log("line-4");
  return <div>Form Component</div>;
};
function App() {
  return (
    <div className="bg-green-400">
      <h1 className="text-black">Sumeya Hassen</h1>
      <Form />
    </div>
  );
}

export default App;
