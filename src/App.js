import "./App.css";
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "biscuit",
      amount: 100,
      date: new Date(2021, 4, 1),
    },
    {
      id: "e2",
      title: "fruits",
      amount: 300,
      date: new Date(2021, 3, 10),
    },
    {
      id: "e3",
      title: "jam",
      amount: 100,
      date: new Date(2021, 2, 17),
    },
    {
      id: "e4",
      title: "vegetaables",
      amount: 1000,
      date: new Date(2021, 3, 22),
    },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
