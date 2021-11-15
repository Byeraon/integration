import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const AmoCRM = require("amocrm-js");
  useEffect(() => {
    const crm = new AmoCRM({
      domain: "loftfitnessyar.amocrm.ru",
      auth: {
        client_id: "1e685259-02ba-443c-973e-c06ef4434c68",
        client_secret:
          "ceDAeke4TAvQiTZeaBme1hXC8gtIRPVBrUZuNZI5twYjlzrU0lGSqOJ1A7P5I3nc",
        redirect_uri: "https://ftestinged.netlify.app/",

        code: "def50200786d0c51afb97ffc0edb6f84d7e355302f3c5e0193affe749c3d5b076323b9fcec2eeaeaa155d6608e6cd4b52a3584618e37be9f3cad516e3fab73c4cfe5237639389440b3966bb7f44984a92e9bfee99413d5d16d8019985ee3e785ef7497adbf6a8eecee788522ef1da9ccd5181f2ad17742df5c10cacee606aaea019731bda07de23d5af06ee99a046d7f8ae557ca31f14262b84a52b447a92ab96302576946a11d6bd14353deb1f94cc152bed3813188ffa4bf4640ca8a85aaac6c71cbad2c84607f984882f15f9f4735b8d529104f80e50013ae92ca300742d117a6962d29fcfb17ae25a552ab412cfbf90682ba2d4ccfcd2f7296f1e804b8397d79e2f0ed49c5f9a596799c39732afaec8cb94cda223e13bbe701a74c07e0ba792742c8f84c4cff9d4e04408caa158f0a3491a6218d7c2859d7d61ef9f1bb383b8d4e15c0728260a45f04f1956cadfe1e3c66288999ad2e5348d7d1997398028dadc8ca3cf8870e8082da2659a891d5076110d2683c27cb7ea1e58c35c44a55c18169b1ce1e258d66256818bac8d4451334550294713119fd52460ec6b4bbc12741d0497efe6abd532034f813aa2a0b866af4c062bf000abc797cf1",
      },
    });
    (async () => {
      const response = await crm.request.get("/api/v4/account");
      console.log(response.data);
    })();
  }, [AmoCRM]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
