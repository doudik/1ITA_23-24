const quotes = [
        "Život je to, co se stane, zatímco si plánujete něco jiného. - John Lennon",
        "Nejlepší čas na zasazení stromu byl před 20 lety. Druhý nejlepší čas je teď. - Čínské přísloví",
        "Jediný způsob, jak dělat skvělou práci, je milovat to, co děláte. - Steve Jobs",
        "Být šťastný neznamená, že je vše perfektní. Znamená to, že jste se rozhodli vidět za nedokonalostmi. - Neznámý autor"
    ];

    const quoteDisplay = document.getElementById('quoteDisplay');
    const generateQuote = document.getElementById('generateQuote');
    const addQuote = document.getElementById('addQuote');
    const newQuote = document.getElementById('newQuote');

    generateQuote.onclick = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    };

    addQuote.onclick = () => {
        const quote = newQuote.value.trim();
        if (quote) {
            quotes.push(quote);
            newQuote.value = ''; // Reset input field
            alert('Citát byl přidán.');
        } else {
            alert('Prosím, zadejte citát.');
        }
    };

