# Flash Chord

## About

Flash Chord is a musical chord randomizer with configurable complexity for various skill levels that generates random chords for practicing chords, scales, and arpeggios on any instrument. Having a randomized stream of chords allows you to improve your reaction time and memory by breaking the habit of memorizing chord progressions in a recurring order.

Visit [https://www.flashchord.com/](https://www.flashchord.com/) to see it in action!

Preview new features and test new development at [http://dev.flashchord.com](http://dev.flashchord.com).

### Creator

Kenny Carlile

- GitHub: @KCarlile
- [http://www.kcarlile.com/](http://www.kcarlile.com/)

## Contributing and Supporting

### Contributing

If you'd like to contribute code to Flash Chord, please contact Kenny Carlile through GitHub or his website. Forks and PRs are welcome, but planned contributions are preferred.

See [/data/supporters.json](/data/supporters.json) for a list of contributors. This is also displayed on the [About page](/about).

### Supporters

Flash Chord would like to extend a special thanks to our supporters who have made kind and generous donations.

See [/data/contributors.json](/data/contributors.json) for a list of supporters. This is also displayed on the [Donate page](/donate).

## Technical

### Dependencies

#### Frontend

- [Twitter Bootstrap](https://getbootstrap.com/)
  - Version: 5.3.0
  - Needed for base theming.
- [Twitter Bootstrap Icons](https://icons.getbootstrap.com/)
  - Version: 1.10.5
  - Needed for icons.
- [jQuery](https://jquery.com/)
  - Version: 3.7.0
  - Needed for enhanced JavaScript functionality.
- [jQuery UI](https://jqueryui.com/)
  - Version: 1.13.2
  - Needed for jQuery's visual components.
- [jQuery UI Base Theme CSS](https://jquery.com/)
  - Version: 1.13.2
  - Needed for base theme styling of jQuery components.
- [jQuery UI Touch Punch](https://github.com/furf/jquery-ui-touch-punch)
  - Version: N/A
  - Needed for touch screen interaction with jQuery.
- [HTML5](https://dev.w3.org/html5/spec-LC/)
  - Version: 5
  - Needed for markup and formatting.
- [CSS3](https://www.w3.org/Style/CSS/)
  - Version: 3
  - Needed for styling.
- [JavaScript / ECMAScript 2015](https://262.ecma-international.org/6.0/)
  - Version: ECMAScript 2015 (ES6)
  - Needed for dynamic client-side (browser) functionality.

#### Backend

- [PHP](https://www.php.net/)
  - Version: 8.1.9+
  - Needed for dynamic backend functionality.

### Docker

Docker is used for local development, although you're welcome to setup your own development hosting stack yourself using Apache and PHP. The `/Dockerfile` and `/docker-composer.yml` files define the images and behaviors required to launch the local development containers.

You'll need to modify your `/etc/localhost` file to include: `127.0.0.1	flashchord.com.local` to `/etc/hosts`

> (In Windows or in Linux in WSL2 on Windows, you'll need to modify the `hosts` file in `C:\Windows\System32\Drivers\etc\` as administrator.)

To run this container (i.e. launch the "server"), follow these steps:

- `$ docker compose up --build` rebuilds and launches the container
  - Or run `$ ./server` from the root of the project folder
- Visit [flashchord.com.local](flashchord.com.local) to access

### Logging and Debugging

Enable debugging in the browser console by adding `?dbg=1` to the URL. This will tell Flash Chord to send logged messages to the console for viewing. Then, use the browser's console to view logging statements.

For logging functionality, see the `js/utils.js` file and look at the following functions:

- `logger($message)`
  - Log a message to the browser console if debugging is enabled
- `function logger_new()`
  - Start a new block of logging with a heavy line if debugging is enabled
- `function logger_break()`
  - Start a new sub-block of logging with a light line if debugging is enabled
