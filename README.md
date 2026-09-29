# Our Little Love Story ❤️

A romantic couple webpage made with only:
- HTML
- CSS
- Vanilla JavaScript

## Files

- `index.html` — page structure
- `style.css` — design, responsive layout, animations
- `script.js` — personal settings + all interactions
- `assets/` — put your photos and music here

## Personalize it

Open `script.js` and edit the `LOVE_CONFIG` object near the top.

### Names
Change:
```js
yourName: "Your Boy",
girlfriendName: "Christineeeeeeee",
```

### Anniversary / start date
Change:
```js
togetherSince: "2024-02-14T19:30:00",
```

Use:
`YYYY-MM-DDTHH:MM:SS`

### Love letter
Replace the text inside:
```js
loveLetter: `...`
```

### Photos
Put your files in `assets/`, then update:
```js
photos: [
  { src: "assets/photo1.jpg", caption: "..." }
]
```

Also replace the hero photos:
- `assets/me.jpg`
- `assets/her.jpg`

### Memories
Edit the `memories` array in `script.js`.
Each memory can have:
- date
- title
- description
- photo

### Music
Put your audio file in `assets/`, for example:
`assets/our-song.mp3`

Then change:
```js
musicPath: "assets/our-song.mp3",
songTitle: "Our Song ❤️",
```

## Run it

Open `index.html` in a browser.

For the smoothest experience, you can also use VS Code + Live Server, but no framework or build system is required.

## Included features

- Responsive romantic design
- Hero section
- Polaroid-style couple photos
- Love letter typing animation
- Read More
- Photo gallery
- Fullscreen lightbox
- Previous/next photo navigation
- Interactive memory timeline
- Love counter
- Random love notes
- Reasons I Love You
- Love meter
- Local music player
- Secret message
- Surprise animation
- Floating hearts
- Click hearts
- Night mode
- Scroll reveal animations
- Back-to-top button

No React, Vue, Bootstrap, or other frameworks are used.
