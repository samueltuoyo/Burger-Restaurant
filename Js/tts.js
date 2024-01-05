
if ('speechSynthesis' in window) {
    const textToSpeak = [
        "WELCOME TO BURGER RESTAURANT DEVELOPED BY MR.WEYINMI",
        "GO THROUGH SOME OF OUR BEST BURGERS",
        "WE OFFER YOU SOME OF THE CHEAPEST AND AFFORDABLE PRICES",
        "ALSO FASTEST CHEAPING AND TRANSPORTING OF GOODS",
    "TAKE YOUR TIME AND GO THROUGH YOUR CHOICE",
    "WE HAVE CHEESE BURGER",
    "WE HAVE HARMBURGER",
    "AND LOTS MORE",
    "WELCOME KINGSLEY ESISI, RAHMAN A.K.A BATMAN, WELCOME SIR.JUSTICE, AND NEW USERS",
    "I HOPE YOU ARE ENJOYING WHAT MY BOSS, CHIEF WEYINMI DESIGNED"
    ];

    const speechSynthesis = window.speechSynthesis;

    // Function to initialize speech synthesis and preload voices
    const initializeSpeech = () => {
        const text = new SpeechSynthesisUtterance('');
        speechSynthesis.speak(text);
    };

    function speakText(index) {
        if (index < textToSpeak.length) {
            const text = new SpeechSynthesisUtterance(textToSpeak[index]);
            text.rate = 0.8; // Adjust rate if needed
            speechSynthesis.speak(text);

            text.onend = function () {
                speakText(index + 1);
            };
        }
    }

    // Initialize speech synthesis outside the load event
    initializeSpeech();

    window.addEventListener('load', function () {
        // Preload voices
        speechSynthesis.onvoiceschanged = function () {
            speakText(0);
        };
    });
}
