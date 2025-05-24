const chatBubble = document.createElement('div');
chatBubble.innerHTML = '💬 Chat with Coach Chad';
chatBubble.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #000;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  font-weight: bold;
`;

document.body.appendChild(chatBubble);

// Chat container
const chatContainer = document.createElement('div');
chatContainer.style.cssText = `
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 350px;
  max-height: 500px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  display: none;
  flex-direction: column;
  z-index: 9999;
  overflow: hidden;
`;

chatContainer.innerHTML = `
  <div style="padding: 1rem; font-weight: bold; background: #000; color: #fff;">Coach Chad</div>
  <div id="chatLog" style="flex: 1; padding: 1rem; overflow-y: auto; font-size: 14px;"></div>
  <form id="chatForm" style="display: flex; border-top: 1px solid #eee;">
    <input type="text" placeholder="Ask anything..." style="flex:1; padding: 0.75rem; border: none;" />
    <button style="background:#000; color:#fff; border:none; padding: 0 1rem;">Send</button>
  </form>
`;

document.body.appendChild(chatContainer);

// Toggle
chatBubble.addEventListener('click', () => {
  chatContainer.style.display = chatContainer.style.display === 'none' ? 'flex' : 'none';
});

// Chat logic
document.getElementById('chatForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const input = this.querySelector('input');
  const msg = input.value.trim();
  if (!msg) return;
  appendMessage('You', msg);
  input.value = '';
  
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY_HERE',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'system', content: 'You are Coach Chad, a helpful, encouraging performance coach.' },
                   { role: 'user', content: msg }]
      })
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "Something went wrong.";
    appendMessage('Coach Chad', reply);
  } catch (err) {
    appendMessage('Coach Chad', 'Error fetching response.');
  }
});

function appendMessage(sender, text) {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  document.getElementById('chatLog').appendChild(div);
}
