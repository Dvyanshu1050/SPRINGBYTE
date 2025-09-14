# Springbyte Software Services Website

A professional, responsive website for Springbyte Software Services built with pure HTML, CSS, and JavaScript featuring smooth animations and modern design.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: GSAP and Locomotive Scroll for premium user experience
- **3D Background**: Three.js particle animation
- **Modern UI**: Clean, professional design with emerald color theme
- **Performance Optimized**: Lightweight and fast loading
- **SEO Friendly**: Proper meta tags and semantic HTML

## Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP**: Professional animations and scroll triggers
- **Three.js**: 3D background particle effects
- **Locomotive Scroll**: Smooth scrolling experience
- **Swiper.js**: Touch-friendly sliders (ready to use)

## Project Structure

\`\`\`
springbyte-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── background-animation.js # Three.js background animation
└── README.md              # This file
\`\`\`

## Setup Instructions

1. **Download the files**: Extract all files to your desired directory
2. **Open in browser**: Simply open `index.html` in any modern web browser
3. **Local server (recommended)**: For best performance, serve via local server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - PHP: `php -S localhost:8000`

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
\`\`\`css
:root {
    --primary-color: #10b981;    /* Main brand color */
    --secondary-color: #6366f1;  /* Secondary accent */
    --text-primary: #1f2937;     /* Main text color */
}
\`\`\`

### Content
- **Company Info**: Update contact details in the contact section
- **Team Members**: Modify team section with your actual team photos and info
- **Services**: Customize service offerings and pricing
- **About**: Update company description and features

### Animations
- **GSAP Animations**: Modify in `js/main.js` in the `initializeAnimations()` method
- **Background**: Customize particle effects in `js/background-animation.js`
- **Scroll Effects**: Adjust Locomotive Scroll settings in `initializeLocomotiveScroll()`

## Deployment Options

### 1. Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder to netlify.com/drop
- **Vercel**: Connect to GitHub repository or drag and drop
- **GitHub Pages**: Push to GitHub and enable Pages in settings

### 2. Traditional Web Hosting
- Upload all files to your web hosting via FTP/cPanel
- Ensure `index.html` is in the root directory

### 3. CDN Deployment
- Upload to any CDN service for global distribution
- Update any absolute paths if necessary

## Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+
- **Features**: CSS Grid, Flexbox, ES6 modules, Intersection Observer

## Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized Assets**: Minified CSS and compressed images
- **Efficient Animations**: Hardware-accelerated CSS and GSAP
- **Responsive Images**: Proper sizing for different screen sizes

## Contact Form

The contact form includes:
- **Client-side validation**: Real-time form validation
- **Success/Error notifications**: User feedback system
- **Responsive design**: Works on all devices

**Note**: To make the form functional, you'll need to:
1. Add server-side processing (PHP, Node.js, etc.)
2. Or integrate with services like Formspree, Netlify Forms, or EmailJS

## SEO Optimization

- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Semantic HTML**: Proper heading structure and landmarks
- **Fast Loading**: Optimized for Core Web Vitals

## Support

For technical support or customization requests:
- **Email**: info@springbyte.com
- **Phone**: +91 707973674
- **Address**: Sector 2, Noida, Pin code - 201301, Block A-31, India

## License

This website template is created for Springbyte Software Services. All rights reserved.

---

**Built with ❤️ by Springbyte Software Services**
