# How to Contribute to Flash Chord
Thank you for your interest in contributing to Flash Chord! Please read this document for information on how you can contribute.

## Getting Involved
If you want to try out Flash Chord, feel free to checkout the repository to your local or fork the main project into your own GitHub repo. If you'd like to get involved on a social level, please contact the project lead through an Issue in the GitHub project, through [Twitter/@Flash_Chord](https://twitter.com/flash_chord), or via email at [info@flashchord.com](mailto:info@flashchord.com).

## Finding Bugs
If you have found a bug, please create an issue here: https://github.com/KCarlile/flashchord/issues Please be as detailed as possible when describing how you found the bug, what you were doing, and the conditions, such as browser and OS.

## Committing Code
If you'd like to commit code to Flash Code, first you should create or identify an issue on which you want to work and notify the project lead (@KCarlile). Once approved, you should follow these steps:
- Assign the issue to yourself and comment that you'll be working on it
- Fork the repo to your own GitHub account
- Checkout the develop branch
- Create a feature branch off the develop branch named after the issue you are solving (e.g. add-widget or fix-js-errors)
- Create your fix locally and test
- Test some more
- Test one more time
- Add an entry to the CHANGELOG.md file noting the change you've made
- Check in your code to your local feature branch and push to your forked repo
   - When committing code, always use meaningful text in your commit comment
- Create a PR from your fork's feature branch against the main project's develop branch
   - When creating a PR, always use meaningful text in your PR title and body and link to the issue if one exists
   - Comment in the issue with a link to the PR
- Wait for your PR to be reviewed, commented, and (eventually) merged
- Once merged into the develop branch, your new changes will be available on http://dev.flashchord.com/
- When the next release version of Flash Chord is cut, your fix may be made public on http://www.flashchord.com/

## Coding Conventions
We will try to use industry standard coding conventions whenever possible. If you find an instance of code that is not compatible with standards, please file a bug. Generally:
- Use 4 spaces for indentation (soft tabs)
- Name your variables, classes, and functions with meaningful names (loops are okay to use `i`, `j`, etc.)
- Add comments where applicable to describe your code's intent and anything that might need explanation
- Always use explicit parenthesis: order of operations is not good enough because it may not be what the coder intends; always use explicit parenthesis
   - `if ($thing1 && $thing2 || $thing3) { ... }` << This is bad >:(
   - `if (($thing1 && $thing2) || $thing3) { ... }` << This is good :)

## Other Ways to Contribute
If you're not a coder or you just don't want to contribute code, we can always find other ways for you to help, such as:
- Testing various use cases and environments
- Documentation
- Marketing/promotion
- Or you can always make a donation at http://flashchord.com/donate

## Thanks!
Thank you once again for your interest in contributing to open source software. :)
