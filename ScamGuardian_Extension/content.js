// 1. Extract Data from the Page
const currentUrl = window.location.href;
// Grab the first 1500 characters of visible text so we don't overload the API
const pageText = document.body.innerText.substring(0, 1500); 

console.log("🛡️ AI Scam Guardian: Scanning page...");

// 2. Send Data to FastAPI Backend
// Changed from 127.0.0.1 to localhost
fetch("http://localhost:8000/analyze", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        url: currentUrl,
        message_text: pageText
    })
})
.then(response => response.json())
.then(data => {
    console.log("🛡️ Scan Result:", data);
    // 3. Inject Banner based on the result
    injectBanner(data.risk_label, data.risk_score, data.reasons);
})
.catch(error => {
    console.error("🛡️ Scam Guardian Error: Is the Python backend running?", error);
});

// 4. Function to Build and Inject the UI Banner
function injectBanner(label, score, reasons) {
    // Don't show safe banners on every single website to avoid annoying the user
    // Only show if it's Caution or Dangerous (or you can force it for the hackathon demo)
    
    const banner = document.createElement("div");
    banner.className = `scam-guardian-banner ${label.toLowerCase()}`;
    
    // Format the reasons into a readable string
    const reasonText = reasons.join(" | ");
    
    banner.innerHTML = `
        <div>
            <strong>🛡️ AI Scam Guardian [${label.toUpperCase()}]</strong> 
            - Risk Score: ${(score * 100).toFixed(0)}% <br>
            <span style="font-size: 12px; font-weight: normal;">Reasons: ${reasonText}</span>
        </div>
        <div class="scam-guardian-close" onclick="this.parentElement.remove()">✖</div>
    `;
    
    document.body.prepend(banner);
}