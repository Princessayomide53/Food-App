import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main className="bg-[#383838]">
        <Meals />
      </main>
    </>
  );
}

export default App;
