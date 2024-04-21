// Component imports
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {   // App component
  // JSX
  return (
    <div className="App h-full w-dvh bg-green-100 dark:bg-stone-700 flex flex-col justify-between items-center gap-5">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
