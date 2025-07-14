Responsive Photo Album using HTML & Flexbox

This project is a responsive Photo Album web application built using HTML, CSS (Flexbox), and a structured file system. It includes an `index.html` gallery page displaying 20 images in a flexible grid layout. Each image links to its own dedicated page with an enlarged image and a unique description.

---

Features

- Fully responsive layout using CSS Flexbox
- Clean and minimalistic design
- Enlarged view with custom description for each photo
- Smooth hover effect on images
- Organized folder and file structure
- Reusable global CSS file for all individual photo pages
- Supports both desktop and mobile views
- Easy navigation back to the album

---

Folder Structure

project-folder/
├── index.html               Main gallery page
├── style.css                Stylesheet for index.html
├── images/                  Folder containing 20 photos (photo1.jpg to photo20.jpg)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
├── pages/
│   ├── photo1.html          Individual image page with enlarged photo and description
│   ├── photo2.html
│   └── ... up to photo20.html
│   └── photo.css            Shared CSS file for all photo pages

---

Image Pages

Each `photo#.html` page includes:

- The enlarged image
- A unique, detailed description of the photo
- A "Back to Album" button that links to `index.html`

Descriptions are custom-written based on the subject and visual style of each photo.

---

Technologies Used

- HTML5 for structure and content
- CSS3 for layout and styling
- Flexbox for responsive image grid
- Media queries for device adaptability
- Manual hyperlinking between pages

---

How to Use

1. Download or clone the project folder.
2. Make sure the folder structure is preserved.
3. Open `index.html` in a web browser.
4. Click on any photo to open its detailed page.
5. Use the "Back to Album" link to return to the main gallery.

You can host this on GitHub Pages or any other static web hosting platform.

---

Responsive Design

The layout adjusts based on screen size:

- Desktop: Multi-column layout (4–5 images per row)
- Tablet: Medium column layout (2–3 images per row)
- Mobile: Single column (1 image per row)

Hover effects are active on desktop and touch-friendly on mobile.

---

Customization

- Replace `images/` content with your own set of 20 photos.
- Update titles and descriptions in each `photo#.html` page.
- Modify `photo.css` to change colors, font styles, or layout preferences.
- Add more features like navigation arrows, slideshows, or lightboxes if needed.

---

Optional Improvements

Here are some ideas to expand this project:

- Add a previous/next navigation bar inside each photo page
- Implement modal view instead of separate pages
- Add dark mode support using a toggle button
- Add download or share buttons for each image
- Use JavaScript to auto-generate photo pages

---

License

This project is free to use and modify for educational, personal, or academic purposes. No attribution required, though credits are appreciated.
