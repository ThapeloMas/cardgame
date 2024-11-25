## Card Guessing Game
A fun and interactive card guessing game built with Node.js, EJS, HTML, and CSS. Players match pairs of cards on a 6x6 grid. The game dynamically shuffles the cards and challenges users to match all pairs to win!

## Features
Dynamic Card Shuffling: Cards are shuffled and randomly displayed on every game start or reset.
Interactive Gameplay: Click to reveal cards, and match pairs to keep them open.
Winning Animation: Displays a congratulatory message when all pairs are matched.
Stylish Design: Enhanced card hover effects, animations, and a responsive layout.
Reset Button: Restart the game anytime with a reshuffled grid.
## Technologies Used
Backend: Node.js, Express.js
Frontend: EJS for templating, HTML, CSS, and JavaScript
Styling: Modern hover effects, animations, and transitions for an engaging user experience.
Getting Started
Prerequisites
Node.js installed on your system.
A code editor like VS Code.
## Installation
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/card-guessing-game.git
Navigate to the project directory:
bash
Copy code
cd card-guessing-game
Install dependencies:
bash
Copy code
npm install
Usage
Start the server:
bash
Copy code
node app.js
Open your browser and navigate to:
arduino
Copy code
http://localhost:3000
Enjoy the game!
## Game Rules
The game starts with a shuffled 6x6 grid of 36 cards (18 pairs).
Click on a card to reveal its content.
Match two cards with the same content to keep them open.
If two cards do not match, they will flip back after a short delay.
Match all pairs to win the game.
File Structure
graphql
Copy code
## card-guessing-game/
├── public/
│   ├── styles.css         # CSS for styling the game
│   └── script.js          # JavaScript for game logic
├── views/
│   ├── index.ejs          # Main HTML template
├── app.js                 # Node.js server logic
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
## Customization
Card Content: Modify the card values in the shuffleCards function in app.js.
Styling: Adjust styles in public/styles.css for a personalized look.
Animations: Update keyframes or transitions in the CSS for custom effects.
Contributing
Feel free to contribute by:

## Forking the repository.
Creating a new branch:
bash
Copy code
git checkout -b feature-name
Committing your changes:
bash
Copy code
git commit -m "Add your message here"
Pushing to the branch:
bash
Copy code
git push origin feature-name
Opening a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Inspired by classic card-matching games.
Special thanks to the EJS, Node.js, and web development communities for their resources.
Enjoy matching cards and have fun! 😊







