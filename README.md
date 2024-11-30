# PopCorn

> Movie/Series record list

## Video link & Vercel URL

- [Video Link](https://youtu.be/5DSRI8nXt2U)
- [URL](https://pop-corn-six.vercel.app/)

## Tech Stack

- ReactJS, HTML5, CSS, Tailwindcss
- Design by ReactJS, Tailwindcss, custom css
- Structured use HTML5 & ReactJS component
- Custom Hook, useState, useEffect, prop drilling

## Features

- Search Integration from api
  - Search by type `movie/series/none`
  - search will automatically focused on reload, so one can type at start of the app
- Loader component for view on fetching,loading
- Error component for view on if fetching went wrong
- Two Body card each has thier on loader & error handling capability
- Movie List scrollable & clickable
  - On click movie details will load on another view card
  - Integrate with back option & mark for if wathcing/wathced
  - Automatically route to the main home card without loading
  - If again click on the same movie/series then movie details will show watched
- Wathced list is store on localStorage `'watched'`
  - If deleted from the wathced list then that movie can again add to the list
- No duplicacy on watched list
- TitleBar has its icon and app name
  - Changing on movie name title bar automatically change with that movie name
  - After back main page it automatically changes to normal
- Also from watched list how many movie is being watched till now is also counted along with time
- The whole app runs smoothly without **any reload**

> User authentication will add on future update
>
> Not optimized for mobile view yet
