import React, { useState } from "react";
import "./styles.css";
var DB_data = {
  Messaging: [
    {
      name: "Signal",
      rating: "4.5/5",
      about:
        "Signal is a cross-platform centralized encrypted messaging service developed by the Signal Foundation and Signal Messenger. It uses the Internet to send one-to-one and group messages, which can include files, voice notes, images and videos. ... Signal's software is free and open-source."
    },
    {
      name: "telegram",
      rating: "4/5",
      about:
        "Telegram Messenger Inc. Telegram is a freeware, cross-platform, cloud-based instant messaging (IM) software and application service. The service also provides end-to-end encrypted video calling, VoIP, file sharing and several other features. ... In January 2021, Telegram surpassed 500 million monthly active users"
    },
    {
      name: "whatsapp",
      rating: "3.5/5",
      about:
        "WhatsApp Messenger is a FREE messaging app available for Android and other smartphones. WhatsApp uses your phone's Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to let you message and call friends and family. ... MULTIMEDIA: Send and receive photos, videos, documents, and Voice Messages."
    }
  ],
  Browsing: [
    {
      name: "DuckDuckgo",
      rating: "4.5/5",
      about:
        "DuckDuckGo is a search engine that shows the same results for a search term to all its users. This is unlike Google, which filters search results based on the sites you have been visiting."
    },
    {
      name: "tor Browser",
      rating: "4/5",
      about:
        "The Tor Browser is a web broswer that anonymizes your web traffic using the Tor network, making it easy to protect your identity online. ... A few caveats: Browsing the web over Tor is slower than the clearnet, and some major web services block Tor users."
    },
    {
      name: "Chrome",
      rating: "4.2/5",
      about:
        "Chrome is the most secure browser in the world. Advanced technology like site isolation, sandboxing, and predictive phishing protection keep you safe from security threats"
    }
  ]
};

var ItemDb = Object.keys(DB_data);
export default function App() {
  const [selectedItem, setselectedItem] = useState("Messaging");
  function OnclickHandler(item) {
    setselectedItem(item);
  }
  return (
    <div className="App">
      <header>
        <h1 class="header">
          <span role="img" aria-label="emoji">
            🔎🔐Stay Anonymous
          </span>
        </h1>
        <small>
          <p>
            These are some app recommendations which helps to keep users
            anonymous and gives privacy
          </p>
        </small>
      </header>
      <div>
        {ItemDb.map((item) => (
          <button key={item} onClick={() => OnclickHandler(item)}>
            {item}
          </button>
        ))}
      </div>
      <div id="items">
        <ul class="list">
          {DB_data[selectedItem].map((itemclicked) => (
            <li class="app-details" key={itemclicked}>
              <small>
                <strong>Name:</strong>
              </small>
              <bold>
                {" "}
                <strong>{itemclicked.name}</strong>
              </bold>
              <div class="division">
                <small>
                  <strong>ratings:</strong>
                  {itemclicked.rating}⭐
                </small>
              </div>
              <div class="division">
                <small>
                  <strong>about:</strong>
                  {itemclicked.about}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
