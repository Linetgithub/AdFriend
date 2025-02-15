function replaceAds() {
    const adSelectors = [
        "iframe[src*='doubleclick.net']",
        "iframe[src*='googleadservices.com']",
        "iframe[src*='googlesyndication.com']",
        "div[id*='ad']",
        "div[class*='ad']",
        ".adsbygoogle"
    ];

    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => {
            const replacement = document.createElement("div");
            replacement.className = "replacement-box";
            replacement.style.cssText = "padding: 20px; background:rgb(235, 10, 10); text-align: center; font-size: 16px; color: black; border-radius: 5px;";
            replacement.textContent = getRandomQuote();
            ad.replaceWith(replacement);
        });
    });
}

function getRandomQuote() {
    const quotes = [
        "Stay positive, work hard, make it happen! 😊",
        "Believe in yourself and all that you are. 🌟",
        "Progress, not perfection! 🚀",
        "Keep pushing forward! 💪",
        "You are capable of amazing things!"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(() => replaceAds());
});

observer.observe(document.body, { childList: true, subtree: true });

window.addEventListener("load", replaceAds);