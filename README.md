# Loyola Tech Fest — starter frontend

## Run locally
1. Install Node.js (LTS) and VS Code.
2. Open this folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed in the terminal (usually http://localhost:5173).

## Where to edit
- `src/data/homeData.js` — college name, fest name, tagline, date, venue and hero image path.
- `src/data/eventsData.js` — event names, descriptions, categories and image paths.
- `src/data/organizersData.js` — organizer names and roles.
- `src/styles/` — visual styling, separated by section.
- `public/images/` — replace images with your own files.

## Important
This is the first frontend version. Registration, rulebook PDF download, live participant count and admin dashboard are not connected yet. We will add those after the design and content are approved.

## Image replacement
Copy your image into `public/images/`, then update the filename in the relevant data file. Keep the path beginning with `/images/`.

## ZAMNIRA theme assets
Place your existing logos in `public/images/` as `logo-lc.png` and `logo-dept.png`. For a custom cosmic hero background, add `zamnira-background.jpg` to the same folder. If it is not present, the page still displays the built-in dark purple / gold gradient theme.

The fest date is set to 5 December 2026 at 9:00 AM as a temporary countdown time. Change the time in `src/data/homeData.js` if the event begins at another time. Event names and office-bearers are in `src/data/eventsData.js` and `src/data/organizersData.js`.

## ZAMNIRA event detail pages

Each event card arrow opens its own event page at `/events/<event-id>`.

Event titles, descriptions, rules, icons and Google Forms URLs are editable in separate files under `src/data/events/`:

- `dual-syntax.js`
- `promptopia.js`
- `byte-battles.js`
- `tech-nova.js`
- `twin-tones.js`
- `dark-crown.js`
- `sonic-enigma.js`
- `treasure-hunt.js`

To connect a Google Form, open the matching event file and replace the empty `registrationUrl: ""` with the form URL, for example `registrationUrl: "https://docs.google.com/forms/d/e/your-form-id/viewform"`.

Common rules are editable in `src/data/rulesData.js`. Event-specific rules are editable in the corresponding event file above.

Install dependencies and start the local site with `npm install` and `npm run dev`.
