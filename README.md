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

- Twitter Bootstrap HTML/CSS theme (4.5)
- JavaScript
- jQuery
- PHP
- [Parsedown for Markdown parsing](https://parsedown.org/)
  - Composer for dependency management
- Jest for unit testing of JavaScript
  - Run Jest using `./test` from the command line

### Docker

Docker is used for local development, although you're welcome to setup your own development hosting stack yourself using Apache and PHP. The `/Dockerfile` and `/docker-composer.yml` files define the images and behaviors required to launch the local development containers.

You'll need to modify your `/etc/localhost` file to include: `127.0.0.1	flashchord.com.local` to `/etc/hosts`

To run this container (i.e. launch the "server"), follow these steps:

- `$ docker compose up --build` rebuilds and launches the container
  - Or run `$ ./server` from the root of the project folder
- <flashchord.com.local> to access

## Creator

Kenny Carlile

- GitHub: @KCarlile
- [http://www.kcarlile.com/](http://www.kcarlile.com/)

## Contributions

If you'd like to contribute, please contact Kenny Carlile through GitHub or his website. Forks and PRs are welcome, but planned contributions are preferred.

## Contributors

- _Your name here!_

## Supporters

Thank you to those who have supported Flash Chord!

- Matt Godwin (donation)
