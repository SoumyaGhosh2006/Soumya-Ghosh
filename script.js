

function toggleShortlist(button) {
    const card = button.closest('.studio-card');
    const cardId = card.id;
    const label = button.querySelector('.shortlist-label');
    const icon = button.querySelector('.shortlist-icon');

    // Get current shortlisted cards from localStorage
    let shortlistedCards = JSON.parse(localStorage.getItem('shortlistedCards')) || [];

    if (shortlistedCards.includes(cardId)) {
        // Remove from shortlist
        shortlistedCards = shortlistedCards.filter(id => id !== cardId);
        card.classList.remove('shortlisted');
        if (label) label.textContent = 'Shortlist';
        if (icon) icon.src = '../img/shortlist.png';
    } else {
        // Add to shortlist
        shortlistedCards.push(cardId);
        card.classList.add('shortlisted');
        if (label) label.textContent = 'Shortlisted';
        if (icon) icon.src = '../img/checkedlist.png';
    }

    // Save updated shortlisted cards to localStorage
    localStorage.setItem('shortlistedCards', JSON.stringify(shortlistedCards));
}

// Restore shortlisted cards on page load
document.addEventListener('DOMContentLoaded', () => {
    const shortlistedCards = JSON.parse(localStorage.getItem('shortlistedCards')) || [];
    shortlistedCards.forEach(cardId => {
        const card = document.getElementById(cardId);
        if (card) {
            card.classList.add('shortlisted');
            const button = card.querySelector('.shortlist-btn');
            const label = button?.querySelector('.shortlist-label');
            const icon = button?.querySelector('.shortlist-icon');
            if (label) label.textContent = 'Shortlisted';
            if (icon) icon.src = '../img/checkedlist.png';
        }
    });
});

// Display shortlisted items (for shortlisted.html)
if (document.getElementById('shortlisted-studios')) {
    const shortlistedStudiosElement = document.getElementById('shortlisted-studios');
    const shortlistedCards = JSON.parse(localStorage.getItem('shortlistedCards')) || [];

    if (shortlistedCards.length === 0) {
        shortlistedStudiosElement.innerHTML = '<p>No studios have been shortlisted yet.</p>';
    } else {
        shortlistedCards.forEach(cardId => {
            const studioCard = document.createElement('div');
            studioCard.className = 'studio-card shortlisted';
            studioCard.innerHTML = `
                <h2>Studio ID: ${cardId}</h2>
                <p>This studio has been shortlisted.</p>
            `;
            shortlistedStudiosElement.appendChild(studioCard);
        });
    }
}