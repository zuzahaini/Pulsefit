PulseFit — Minimal modern gym landing page

Overview

This is a simple, responsive static website built with HTML, CSS, and JavaScript. It demonstrates a modern, minimal gym profile with animated equipment (SVG & CSS), membership plans, offers, and a trainers section with images.

Structure

- index.html — main page
- css/style.css — site styles
- js/main.js — small interactions (nav toggle, scroll reveal)

Images

Trainer images are loaded from Unsplash (external URLs). You can replace these with local images by saving them into an `assets/` folder and updating the `src` attributes in `index.html`.

Run locally

Open `index.html` in your browser. On Windows you can right-click -> Open with -> your browser, or run:

```powershell
Start-Process "index.html"
```

Notes & next steps

- Replace placeholder images with your own photographer-provided photos for trainers and gallery.
- Add a backend or form handling for real signups (the contact form is non-functional currently).
- If you want animations of actual equipment motion (treadmill, kettlebell physics), I can add SVG animations or Lottie files.
