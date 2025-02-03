function replaceAds() {
    const adSelectors = ["iframe", ".ad", ".adsbygoogle"]; // Common ad elements
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => {
            const replacement = document.createElement("div");
            replacement.className = "replacement-box";
            replacement.textContent = getRandomQuote();
            ad.replaceWith(replacement);
        });
    });
}

function getRandomQuote() {
    const quotes = [
        "Stay positive, work hard, make it happen!",
        "Believe in yourself and all that you are.",
        "Progress, not perfection!"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Run function on page load
window.addEventListener("load", replaceAds);