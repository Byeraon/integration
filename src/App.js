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
        redirect_uri: "https://example.com",

        code: "def50200e7a248544c3c15065f924864b60275fc20f1f4d9c02b5745e4d96319f55f76367326e28f7f0ea9a8718784744bd3568af2d0d3a753a699e2ed5e8d3880fc997d14393b4bed570a1c3752babdb2382231ab4e23162be6ca154e84bf1eb4f9612d62a75383eba43df970435028e94e498c8c374cc5356f46575ee1da6c85922417d59de20affa469c6c6d7d71fff514b7303d89d1d6b6a32dd827d6576a40c0210b21ed11d518c87a88af8578b3e436babfeeae61d12bf73991e5c1ce8a0995ed25de3913daf81bcbbba1222352ccca5efc697680f02d2a4328fc2e3abd13d4761be1a362d9b228ae2b7ce87381c5998ff7d7d1ba37e7a5a4e6a244b168bc60670b200111ecd37eb6d3537e0eadcdfb4537bb5ec78e2878903066f62d52f5ab00f88e5ceb184e601502fa54ef01b3e12572f5a7aa7fb11feca0f92a9c79685b0770c23c2cc8cd3198d57efbade7aa5f23ef8007ef2a2a711dc557ff5ddbcfcf2e89a26ad54f4a6e249bacd8083c164f3d5a9ee3759b929299267e6fbf38c7f7e4e900f5b653cb106a372d6a7a927f0ac3e0add6388adb1ec2635582732e07aac5080fefe667f52e91116a4b039ac0b1fb7a92f9acb19b3eba4",
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
