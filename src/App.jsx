import Icons from "./components/Icons";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between w-full px-32 py-8 font-medium">
        <Navbar />
        <Logo />
        <Icons />
      </header>
    </main>
  );
}

export default App;
