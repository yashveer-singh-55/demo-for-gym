// Indian UPI Payment Modal Logic
function openUpiModal(planName, amount) {
    const modal = document.getElementById('upi-modal');
    const title = document.getElementById('modal-plan-title');
    const price = document.getElementById('modal-plan-price');
    const confirmBtn = document.getElementById('modal-whatsapp-confirm');

    if (modal && title && price && confirmBtn) {
        title.innerText = planName;
        price.innerText = `₹${amount}`;
        confirmBtn.href = `https://wa.me/918955108613?text=Hi!%20I%20have%20completed%20the%20UPI%20Payment%20of%20₹${amount}%20for%20the%20${encodeURIComponent(planName)}.`;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeUpiModal() {
    const modal = document.getElementById('upi-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

}
