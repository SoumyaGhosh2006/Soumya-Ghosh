# EmptyCup - Studio Listing App

A responsive mobile-first web application for browsing and managing design studios. Users can view studio profiles, check ratings, contact information, and maintain a shortlist of preferred studios.

## Features

- **Studio Browsing**: View detailed studio profiles with ratings, project counts, experience, and pricing
- **Shortlisting System**: Add/remove studios from your personal shortlist with persistent storage
- **Contact Integration**: Direct phone call links for studio contact numbers(not added)
- **Responsive Design**: Optimized for mobile devices (414px width)
- **Navigation**: Tab-based navigation system for different app sections(not added)
- **Studio Actions**: Multiple action buttons for each studio (Details, Hide, Shortlist, Report)

## Project Structure

```
EmptyCup/
├── src/
│   ├── index.html          # Main studio listing page
│   ├── shortlisted.html    # Shortlisted studios page
│   ├── styles.css          # Application styles
│   └── script.js           # JavaScript functionality
└── img/                    # Image assets
    ├── logo-small.png
    ├── contacts.png
    ├── gallery.png
    ├── map.png
    ├── shortlisted.png
    ├── sort.png
    ├── details.png
    ├── hide.png
    ├── shortlist.png
    ├── checkedlist.png
    └── report.png
```

## Technologies Used

- **HTML**: Semantic markup structure
- **CSS**: Responsive styling with flexbox layout
- **JavaScript**: Interactive functionality and local storage
- **Local Storage API**: Persistent shortlist data storage

## Installation & Setup

1. Clone or download the project files
2. Ensure all image assets are placed in the `/img/` directory
3. Open `src/index.html` in a web browser
4. No additional dependencies or build process required

## Usage

### Main Features

**Studio Cards**: Each studio displays:
- Studio name and star rating
- Description and team information
- Statistics (Projects, Years of experience, Price range)
- Contact phone numbers (clickable for direct calling)

**Shortlisting**:
- Click the "Shortlist" button to add a studio to your favorites
- Button changes to "Shortlisted" with visual feedback
- Shortlisted studios persist across browser sessions
- View all shortlisted studios on the dedicated shortlisted page

**Navigation**:
- Tab-based navigation between different sections
- Currently active tab is highlighted
- Links to shortlisted page for viewing saved studios

### Studio Information

The landing page currently features three example studios:

1. **Epic Designs**
   - 4-star rating
   - 57 projects, 8 years experience
   - Mid-range pricing ($$)

2. **Studio - D3**
   - 5-star rating
   - 43 projects, 6 years experience
   - Premium pricing ($$$)

3. **House of Designs**
   - Basic listing (details incomplete)

## File Descriptions

### `src/index.html`
Main application page containing:
- Header with logo and menu
- Navigation tabs
- Studio card listings
- Action buttons for each studio

### `src/shortlisted.html`
Dedicated page for viewing shortlisted studios:
- Simple layout for displaying saved studios
- Integration with main JavaScript functionality

### `src/styles.css`
Complete styling including:
- Mobile-first responsive design (414px container)
- Studio card layouts with alternating backgrounds
- Button styling and hover effects
- Shortlisted state visual indicators
- Typography and color scheme

### `src/script.js`
JavaScript functionality:
- `toggleShortlist()`: Add/remove studios from shortlist
- Local storage management for persistent data
- DOM manipulation for visual state changes
- Page load restoration of shortlisted items

## Customization

### Adding New Studios
To add new studio cards, follow this structure in `src/index.html`:

```html
<div class="studio-card" id="unique-studio-id">
    <div class="studio-content">
        <div class="studio-header">
            <h2 class="studio-name">Studio Name</h2>
        </div>
        
        <div class="rating">
            <!-- Add 1-5 stars -->
            <span class="star">★</span>
            <span class="star empty">☆</span>
        </div>

        <p class="description">Studio description...</p>

        <div class="stats">
            <div class="stat">
                <span class="stat-number">Projects<br><p class="stat-label">Label</p></span>
            </div>
            <!-- Add more stats -->
        </div>

        <div class="contact-info">
            <a href="tel:+1234567890" class="phone-number">Phone Number</a>
        </div>
    </div>

    <div class="action-buttons">
        <!-- Action buttons -->
    </div>
</div>
```

### Styling Modifications
Key CSS variables and classes:
- `.container`: Main app container (414px width)
- `.studio-card`: Individual studio styling
- `.studio-card.shortlisted`: Shortlisted state styling
- Color scheme: Primary brown (`#8D4337`), backgrounds (`#f8f0f0`, `#FFFCF2`)

## Browser Compatibility
- Mobile-optimized for touch interactions

## License

This project is provided for EmptyCup Assignment 2025

