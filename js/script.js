function openPopupWithInput(question, placeholder, callback) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-question').textContent = question;
  
    const inputField = `
      <input 
        type="text" 
        id="popup-input" 
        class="w-full border border-gray-300 rounded p-2 mb-4" 
        placeholder="${placeholder}" 
      />
      <button 
        onclick="handleInput(${callback})" 
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Confirmar
      </button>
    `;
    document.getElementById('popup-answer').innerHTML = inputField;
    popup.classList.remove('hidden');
  }
  
  function handleInput(callback) {
    const input = document.getElementById('popup-input').value;
    const response = callback(input);
    document.getElementById('popup-answer').innerHTML = `<p>${response}</p>`;
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
    document.getElementById('popup-answer').innerHTML = ''; // Limpa o conteúdo do popup
  }

  function openPopup(question, content) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-question').textContent = question;
    document.getElementById('popup-answer').innerHTML = `<p>${content}</p>`;
    popup.classList.remove('hidden');
  }
  
  