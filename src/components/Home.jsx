// components
import Header from "./Header";
import Codespace from "./Codespace";
import Display from "./Display";

function Home() {
  return (
    <>
      <Header name = "code editor" />
      <Codespace />
      <Display />
    </>
  );
}

export default Home;
