const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname)));
app.use('/js', express.static(path.join(__dirname)));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Handle contact form submissions
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you would typically handle the form data
    // For now, just log it and send a response
    console.log('Contact form submission:', { name, email, message });
    res.json({ message: 'Form submitted successfully' });
});

// Handle 404s - Update the path to look in the html directory
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'html', '404.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
