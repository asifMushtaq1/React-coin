import React, { useState } from "react";
import Coin from "../components/Coin";

const CoinComponent = () => {
  const [coinState, setCoinState] = useState({
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  });
  const coins = [
    { side: "heads", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" },
    {
      side: "tails",
      imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=2de02874eff4e9ddab9b48b54bb8ecc20f73f15d-1603450037-0-AVhEei-3wkMH3fbyxWAgQcXmfwMdUF4iLIxJ0hEaOdImMotFq1G9gnGY-yKVkI4q84GCtFBmT10Er7PA7yyJ2xkK7vjd49ubsgz1Pskc-83QLtewSNORjVHstjSmqJgYEnBaNAG_juKfKdz58pQMssYr9qKNabDPgpLXWn3PmtQkl5FdMude2nP4Nq_Jjgs5C4n3SdrR1Dx0HB7OW6VgDAOypMFlR93cEPB1sfsxENvp2Y7FF1XPFMfOdSb1MpbvrmzWZEXzBxIPo0zEge1ZDnORhmGqYKYLychAIf8Z2AHLap_2rRHfGwh-a2HkDmxrRg.jpg",
    },
  ];
  function flipCoin(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const handleClick = () => {
    const newCoin = flipCoin(coins);
    console.log("newCoin", newCoin);
    setCoinState((prevState) => {
      let newState = {
        ...prevState,
        currCoin: newCoin,
        nFlips: prevState.nFlips + 1,
        nHeads: prevState.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: prevState.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
      return newState;
    });
  };
  return (
    <div>
      <h2>Let's Flip A Coin!</h2>
      <button onClick={handleClick}>Flip me!</button>
      {coinState.currCoin && <Coin info={coinState.currCoin} />}
      <p>
        Out of {coinState.nFlips} flips, there have been {coinState.nHeads}{" "}
        heads and {coinState.nTails} tails.
      </p>
    </div>
  );
};
export default CoinComponent;
