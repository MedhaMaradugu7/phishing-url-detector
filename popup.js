function isSuspiciousUrl(url) {
    const suspiciousPatterns = [
        /free/i,
        /login/i,
        /account/i,
        /verify/i,
        /secure/i,
        /paypal|amazon|bank|wallet/i,
        /[0-9]{5,}/, // long random strings
        /https?:\/\/[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}\/.+\..{0,4}$/ // hidden file downloads
    ];

    let score = 0;
    suspiciousPatterns.forEach(pattern => {
        if (pattern.test(url)) score++;
    });

    const suspiciousDomains = ['bit.ly', 'tinyurl.com', 'rb.gy'];
    suspiciousDomains.forEach(domain => {
        if (url.includes(domain)) score += 2;
    });

    return score >= 3; // suspicious if score ≥ 3
}

document.getElementById("scanBtn").onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const isBad = isSuspiciousUrl(tab.url);
    document.getElementById("result").innerText = isBad
        ? "⚠️ Suspicious URL Detected!"
        : "✅ This URL looks safe.";
};

