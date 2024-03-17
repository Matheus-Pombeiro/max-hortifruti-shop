// Component imports
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {   // App component
  // JSX
  return (
    <div className="App bg-green-100 dark:bg-zinc-500 flex flex-col justify-between items-center gap-5">
      <Header />
      <Main />
    </div>
  );
}

export default App;
