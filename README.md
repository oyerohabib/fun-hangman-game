# Hangman Game

Welcome to the Hangman Game — a fun and interactive Game built with React!

## 📸 Screenshots

|                                                  |                                                  |
| :----------------------------------------------: | :----------------------------------------------: |
| ![Screenshot 6](https://i.imgur.com/4G8Kv9t.png) | ![Screenshot 5](https://i.imgur.com/Ozazw6H.png) |
| ![Screenshot 3](https://i.imgur.com/2OXAoR0.png) | ![Screenshot 4](https://i.imgur.com/I0KQE7L.png) |
| ![Screenshot 2](https://i.imgur.com/4FWoImO.png) | ![Screenshot 1](https://i.imgur.com/qg05xpD.png) |

## Prerequisites

- [NodeJS](https://nodejs.org/en/) version 14+
- [Docker](https://docs.docker.com/engine/install/ubuntu/) (optional, if you will be running the game with docker)

## Getting Started

To run the application. Follow the steps below:

1. Clone this project using the following command:

   ```bash
   git clone https://github.com/oyerohabib/fun-hangman-game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fun-hangman-game
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm run start
   ```

5. To run the test cases, use:

   ```bash
   npm run test
   ```

Alternatively, you can run the application using Docker, after step 2 above, run the below commands:

1. Build the Docker Image:

   ```bash
   docker build -t fun-hangman-game .
   ```

2. Run the Docker Container:

   ```bash
   docker run -p 3000:3000 -d fun-hangman-game
   ```

Alternatively, you can pull the docker image (from docker hub) and simply run, without having to build or clone it.

1. Pull the Docker Image:

   ```bash
   docker pull habibo1234/fun-hangman-game:1.0
   ```

2. Pull the Docker Image:

   ```bash
   docker run -p 3000:3000 -d habibo1234/fun-hangman-game:1.0
   ```

Now, you should have the project running locally. Visit <http://localhost:3000> in your browser to play the Hangman Game.

Enjoy the game using the on-screen instructions and have fun guessing the words! 🎉

## ⚙️ Upcoming Features/Improvements

- User Authentication (to be able to save progress etc.)
- Analytics (To show various statistics)
- Leaderboard (where people can see their rankings)
- AI Assistant (to help provide tips or hints for the words)
- SASS Platform (where the host can uplaod their own dictionary of words)

## Contributing to project

Thank you for considering contributing to the Hangman Game! We welcome contributions from the community to help improve and grow the project.

Please note that this project adheres to the [Contributor Covenant Code of Conduct](CONTRIBUTING.md). By participating, you are expected to uphold this code. Please report any unacceptable behavior.

## License

This project is licensed under the [MIT License](LICENSE).
