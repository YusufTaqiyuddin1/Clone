import "./App.css";
// import Home from "./pages/Home";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { createContext, useState } from "react";
import { Switch } from "antd";

import "./App.css";

import MainRoutes from "./router/index";

export const ThemeContext = createContext(null);

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// export default function App() {
//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={[theme, toggleTheme]}>
//       <div className="App" id={theme}>
//         <WagmiConfig client={wagmiClient}>
//           <RainbowKitProvider chains={chains}>
//             <Switch
//               onChange={toggleTheme}
//               checked={theme === "dark"}
//               checkedChildren="Dark Mode"
//               unCheckedChildren="Light Mode"
//             />
//             <Home />
//           </RainbowKitProvider>
//         </WagmiConfig>
//       </div>
//     </ThemeContext.Provider>
//   );
// }


const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <div className="App" id={theme}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Switch
              onChange={toggleTheme}
              checked={theme === "dark"}
              checkedChildren="Dark Mode"
              unCheckedChildren="Light Mode"
            />
            <MainRoutes />
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
