// Coach Chad Floating Chat Bubble
(function () {
  const chatBubble = document.createElement("div");
  chatBubble.id = "coach-chad-bubble";
  Object.assign(chatBubble.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    cursor: "pointer",
    zIndex: "9999"
  });
  chatBubble.innerText = "💬";
  document.body.appendChild(chatBubble);

  const iframe = document.createElement("iframe");
  iframe.src = "https://chat.openai.com/g/g-68311183afa88191afa94562b36b701f-coach-chad";
  Object.assign(iframe.style, {
    position: "fixed",
    bottom: "100px",
    right: "20px",
    width: "400px",
    height: "600px",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
    display: "none",
    zIndex: "9999"
  });
  document.body.appendChild(iframe);

  chatBubble.addEventListener("click", () => {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  });
})();
