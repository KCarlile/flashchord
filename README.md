# Flash Chord

## Functional

Musical chord randomizer with configurable complexity for various skill levels. Used for generating random chords for practicing chords, scales, and arpeggios on any instrument with an unpredictable order.

Visit [http://www.flashchord.com/](http://www.flashchord.com/) to see it in action!

Preview new features and test new development at [http://dev.flashchord.com](http://dev.flashchord.com).

### Logging and Debugging

Enable debugging in the browser console by adding `?dbg=1` to the URL. This will tell Flash Chord to send logged messages to the console for viewing. Then, use the browser's console to view logging statements.

For logging functionality, see the `js/utils.js` file and look at the following functions:

- `logger($message)`
  - Log a message to the browser console if debugging is enabled
- `function logger_new()`
  - Start a new block of logging with a heavy line if debugging is enabled
- `function logger_break()`
  - Start a new sub-block of logging with a light line if debugging is enabled

## Technical

- Twitter Bootstrap HTML/CSS theme
- Javascript
- jQuery
- PHP

### Docker

Docker is used for local development, although you're welcome to setup your own development hosting stack yourself using Apache and PHP. The `/Dockerfile` and `/docker-composer.yml` files define the images and behaviors required to launch the local development containers.

You'll need to modify your `/etc/localhost` file to include: `127.0.0.1	flashchord.com.local` to `/etc/hosts`

To run this container (i.e. launch the "server"), follow these steps:

- `$ docker compose up --build` rebuilds and launches the container
  - Or run `$ ./server` from the root of the project folder
- <flashchord.com.local> to access

### Deployment to Dev

Any pushes to the `develop` branch are automatically deployed to `http://dev.flashchord.com/` at `public_html/flashchord.com/dev/` via the GitHub action defined in `.github/workflows/develop.yml`.

[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)

### Deployment to Production

The deployment process for production is manual and involves:

- In GitHub, create a release with a tag
- Login to the web host and navigate to `public_html/flashchord.com/www`
- Checkout the `main` branch and pull
- Checkout the desired tag

### SSL/HTTPS

The HTTPS certificate is managed via [Let's Encrypt](https://letsencrypt.org/) and is updated every ~90 days via a local
script.

## Creator

Kenny Carlile

- GitHub: [@KCarlile](https://github.com/KCarlile)
- Professional: [http://www.kcarlile.com/](http://www.kcarlile.com/)

## Code Contributions

If you'd like to contribute code to Flash Chord, please contact Kenny Carlile through GitHub or his website. Forks and PRs are welcome, but planned contributions are preferred.

### Code Contributors

- _Your name here!_

## Supporters

Flash Chord would like to extend a special thanks to our supporters who have made kind and generous donations.

- Matt Godwin
- Marco Valenti
- Yohaan Pissurlenker
- Michael Jacobson
- Andrew Hawkes
- Michelle O.
- Matteo Pigni
- Zachary McIvor
- Michael Junkins
- OneSolutions
- Chris Beatty
- George Kuntz
- Ian Blacker (2)
- Lucas Mulkey

## Data Compliance

Flash Chord uses the [Silktide Consent Manager](https://silktide.com/consent-manager/) for cookie consent management.

The following settings are used for configuration:

- Color Scheme
  - Background: #FFFFFF
  - Text: #212529
  - Primary color: #007BFF
- Position: bottom center
- Background
  - Block background until banner is closed: checked
  - Background: #000000
  - Opacity: 0.2
  - Blur: 0
- Cookie icon
  - Position: bottom right
  - Color scheme: second option
- Cookie types
  - 1
    - Name: Necessary
    - Description: These cookies are necessary for the website to function properly and cannot be switched off. They help with things like setting your privacy preferences.
    - These cookies are required: true
  - 2
    - Name: Analytical
    - Description: These cookies help us improve the site by tracking which pages are most popular and how visitors use the site.
    - These cookies are required: false
    - Google consent type (GTAG): Analytics
- Banner text (Advanced)
  - Banner description: We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic. [Cookie Policy](https://www.flashchord.com/privacy).
  - Accept button
    - Visible label: Accept all
    - Accessible label: Accept all cookies
  - Reject button
    - Visible label: Reject non-essential
    - Accessible label: Reject non-essential
  - Preferences button
    - Visible label: Preferences
    - Accessible label: Toggle preferences
- Preferences text (Advanced)
  - Preferences title: Customize your cookie preferences
  - Preferences description: We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.
  - Credit button
    - Visible label: Get this banner for free
    - Accessible label: Get this banner for free
