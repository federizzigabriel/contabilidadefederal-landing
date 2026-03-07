export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521999999999?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      
      {/* PULSE */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

      {/* BOTÃO */}
      <div className="relative bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl transition">
        
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />

      </div>

    </a>
  );
}