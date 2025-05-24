// Coach Chad Chatbot
(function () {
  const chatBubble = document.createElement("div");
  chatBubble.id = "coach-chad-bubble";
  chatBubble.style.position = "fixed";
  chatBubble.style.bottom = "20px";
  chatBubble.style.right = "20px";
  chatBubble.style.width = "70px";
  chatBubble.style.height = "70px";
  chatBubble.style.borderRadius = "50%";
  chatBubble.style.background = "#000";
  chatBubble.style.color = "#fff";
  chatBubble.style.display = "flex";
  chatBubble.style.alignItems = "center";
  chatBubble.style.justifyContent = "center";
  chatBubble.style.fontSize = "32px";
  chatBubble.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  chatBubble.style.cursor = "pointer";
  chatBubble.style.zIndex = "9999";
  chatBubble.innerText = "💬";
  document.body.appendChild(chatBubble);

  const iframe = document.createElement("iframe");
  iframe.src = "https://chat.openai.com/g/g-68311183afa88191afa94562b36b701f-coach-chad";
  iframe.style.position = "fixed";
  iframe.style.bottom = "100px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "600px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "12px";
  iframe.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
  iframe.style.display = "none";
  iframe.style.zIndex = "9999";
  document.body.appendChild(iframe);

  chatBubble.addEventListener("click", function () {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  });
})();
