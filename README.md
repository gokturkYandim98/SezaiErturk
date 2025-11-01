# Dr. Sezai Ertürk Website - Bootstrap Version

Modern, responsive multilingual website for Op. Dr. Sezai Ertürk - Kadın Hastalıkları ve Doğum Uzmanı (Gynecologist & Obstetrician) in Alanya, Turkey.

## Features

- **Multilingual Support**: Full Turkish, English, and Russian translations with flag-based language switcher
- **Fully Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Bootstrap 5**: Built with the latest Bootstrap framework
- **Modern UI/UX**: Clean, professional medical website design
- **Smooth Animations**: Scroll effects and interactive elements
- **Language Persistence**: Remembers user's language preference
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized code and CDN resources

## Sections Included

1. **Navigation Bar**: Sticky navigation with smooth scroll
2. **Hero Section**: Eye-catching introduction with call-to-action buttons
3. **About Section**: Information about the doctor
4. **Main Services**: 6 primary medical services displayed in cards
5. **Detailed Services**: Comprehensive list of diagnostic and treatment services
6. **Clinic Information**: Key clinic features and benefits
7. **Contact Section**: Social media links and location information
8. **Footer**: Copyright and basic information

## Technologies Used

- HTML5
- CSS3 (Custom styles with modern gradients and animations)
- Bootstrap 5.3.2
- Bootstrap Icons
- Vanilla JavaScript (no jQuery required)

## Files Included

- `index.html` - Main HTML structure with translation attributes
- `styles.css` - Custom CSS styling with language switcher styles
- `script.js` - Interactive JavaScript functionality with language switching
- `translations.js` - Translation data for Turkish, English, and Russian
- `resources/sezai_erturk.jpg` - Doctor's professional photo
- `README.md` - This file

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No build process required**: All dependencies are loaded via CDN
3. **Customize content**: Edit the HTML file to update text, images, and information
4. **Update styling**: Modify `styles.css` to change colors, fonts, or layout
5. **Add functionality**: Extend `script.js` for additional features

## Customization Guide

### Language Switching
The website includes a complete multilingual system:
- **Default Language**: Turkish (TR)
- **Available Languages**: Turkish, English, Russian
- **How it works**: Click flag icons in navigation to switch languages
- **Persistence**: Selected language is saved in browser localStorage

To modify translations, edit `translations.js`:
```javascript
translations = {
    tr: { key: "Turkish text" },
    en: { key: "English text" },
    ru: { key: "Russian text" }
}
```

### Doctor's Photo
The doctor's photo is already integrated from `resources/sezai_erturk.jpg`. To replace:
1. Add new photo to `resources/` folder
2. Update the image path in `index.html`

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0d6efd;  /* Change to your preferred color */
    --accent-color: #20c997;    /* Change accent color */
}
```

### Adding Contact Information
Update the contact section in `index.html` with:
- Phone number
- Email address
- Physical address
- Contact form (if needed)

## Features to Add (Optional Enhancements)

1. **Contact Form**: Add a working contact form with email integration
2. **Image Gallery**: Showcase clinic photos
3. **Appointment Booking**: Integrate online booking system
4. **Blog Section**: Add medical articles and health tips
5. **Google Maps**: Embed clinic location
6. **WhatsApp Integration**: Direct messaging button
7. **Patient Testimonials**: Add reviews section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+ (expected)
- Mobile-friendly: Yes
- Load time: < 2 seconds (on standard connection)

## SEO Considerations

The website includes:
- Proper meta tags
- Semantic HTML5 elements
- Alt texts for images
- Descriptive page title
- Clean URL structure

## Social Media Integration

Currently linked:
- Instagram: @drsezaierturk
- YouTube: Dr. Sezai Ertürk channel

## Deployment

You can deploy this website to:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Free tier with custom domain support
- **Vercel**: Free hosting with automatic deployments
- **Any web hosting**: Upload files via FTP

## License

This website template is created for Op. Dr. Sezai Ertürk.

## Support

For issues or customization requests, contact the developer.

---

**Version**: 1.0
**Last Updated**: November 2024
**Created by**: Claude Code Assistant
