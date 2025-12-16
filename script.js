/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // 1. System Signature
    console.log("PLM Systems LLC | Infrastructure Online");
    console.log("Status: Operational");

    // 2. Auto-update Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // 3. Optional: Add 'visible' class if you want to trigger scroll animations manually
    // (Current CSS uses keyframes for auto-load animation, so no scroll logic needed for this single page)
});