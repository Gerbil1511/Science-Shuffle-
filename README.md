# Science Shuffle

![Live Site](https://via.placeholder.com/468x300?text=Live+Site+Here)

<p>
| <a href="https://gerbil1511.........../" target="_blank">Live Project</a> |
</p>


## Introduction

Science Shuffle is a card pairing game revision tool for students studying Science at Key Stage 3 (ages 11-14 years). This project was developed as part of the High Performance Code Institute Full-Stack Software Development For The AI Augmented Developer Bootcamp and was developed in Hackathon 1: Front-end with HTML, CSS & Javascript.

## Authors

- [Geraldine Edwards](https://www.github.com/Gerbil1511)
- [Joanna O'Connor](https://www.github.com/JOCPhys)
- [Maebh NiGhuairim](https://www.github.com/)



## Table Of Contents

* [Science Shuffe](#science-shuffle)
  - [Introduction](#introduction)
  - [Authors](#authors)
  - [Table of Contents](#table-of-contents)
  - [Project Ouline](#project-outline)
* [Project Planning](#project-planning)
  - [UX Design](#ux-design)
  - [User Stories](#user-stories)
  - [Fonts](#fonts)
  - [Images](#images)
  - [Colours](#colours)
  - [Wireframes](#wireframes)
* [Features](#features)
  - [Navigation](#navigation)
  - [Game Board](#game-board)
  - [Game Cards](#game-cards)
  - [Buttons](#buttons)
  - [Inputs](#inputs)
  - [Scores](#scores)
  - [Footer](#footer)
  - [Responsive Design](#responsive-design)
  - [Future Features](#future-features)
* [Agile Methodology](#agile-methodology)
* [Tech](#tech)
  - [Languages](#languages)
  - [Frameworks and Libraries](#libraries-and-frameworks)
  - [Software and Tools](#software-and-tools)
* [AI Tools](#ai-tools)
  - [Development Process](#development-process)
  - [Generating Code](#generating-code)
  - [Debugging Code](#debugging-code)
  - [Reflections on AI](#reflections-on-ai)
* [Deployment](#deployment)
* [Testing](#testing)
  - [Bug Log](#bug-log)
  - [Validation](#validation)
* [Credits and Acknowledgements](#credits-and-acknowledgements)
  - [Credits](#credits)
  - [Acknowledgements](#acknowledgements)

<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## PROJECT OUTLINE
Welcome to the 'Hazards-Match Card-Game' from the Science Shuffle Team! 

This engaging card-match activity is inspired by a physical game created for Year 7 pupils learning laboratory safety by one of our team in their previous career. It was used as a recap at the end of a lesson on safe chemical handling, and it later became a regular classroom ‘starter’ activity to reinforce safety principles throughout Key Stage 3 (ages 11-14) as new chemicals and materials that display GHS hazard symbols were introduced to their learning.

The learning objective of the ‘Working Scientifically’ unit is for pupils to describe processes and key characteristics in common language, while also using technical terminology accurately. The game is designed to enable understanding of the hazards and risks associated with substances carrying these labels, to extend specialist vocabulary and ensure precise use of health and safety terminology. Knowledge of GHS hazard symbols extends beyond the classroom to wider society in the use of common household chemicals (such as detergents) and to those working with hazardous substances (such as Pharmaceuticals, Waste Management, Manufacturing, Hygienists, Emergency Responders and those training in Health & Safety certification (eg NEBOSSH/COSSH/DSEAR and REACH)), making it essential for everyone to recognize and understand these symbols. As such, this game is suitable for all ages, from Key Stage 3 pupils to adults.

In 2015, the GHS was updated to replace the various hazardous material classification systems previously used worldwide, including the old orange CHIP (Control of Hazardous Materials) symbols used in the UK, which many previous learning resources were derived from and continue to use. The Science Shuffle 'Hazards-Match' game uses the updated GHS symbols and meanings, ensuring it is relevant to today’s standards. The game offers multiple difficulty levels: Easy - matching hazard symbols with label names, Medium - matching hazard symbols with descriptions of risk, and Hard - matching label names with descriptions of risk without symbols. This ensures a challenging and educational experience for players of all ages.

As the primary target audience is Key Stage 3 Science students working within a classroom laboratory environment,  the primary design is therefore Tablet-first (using 1112px by 834px screen dimensions), as tablets are the go-to device used in school laboratories. Mobile is considered as secondary (for other learners) and desktop last. The readability of the both the Label Cards and Description cards are optimally viewed in Tablet or Laptop screen sizes*. 

The features such as the 'Timer' and 'Number of Moves' counters and the 'Restart' button etc all remain in the body of the window without the need for scrolling in any device screen sizes. This is to ensure that the user can see all relevant features in one viewport for the focus to remain on the content of the game rather than introduce distractions. 

The game is designed as a revision tool to consolidate learning after study of the Hazards have taken place, however, a modal is provided with an overview of the required information for those who are new to the concept so that it can be used as a study tool in the first instance if necessary. 


<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## PROJECT PLANNING

### UX Design

To ensure our project was user-centric, we began by conducting thorough user research to gather insights and understand the target audience’s needs. This foundational step informed the creation of wireframes for the main page(s), where we meticulously defined the layout and user flow to provide a seamless experience. We then determined a cohesive thematic style that visually represented the game’s intended appearance, incorporating appropriate colours, typography, and design elements. Throughout the process, we collaborated closely to ensure the feasibility of our design concepts. This included providing essential design assets, such as fonts, images and icons, required for the web app’s implementation.

As we moved into the implementation phase, we focused on accurately translating the design into HTML and CSS. Usability testing was conducted across various devices to guarantee a consistent and intuitive user experience. We conducted comprehensive usability testing sessions, gathering feedback from real users to guide further improvements. Regular reviews were carried out to verify that the web app’s design aligned with the initial wireframes and mockups, ensuring consistency and coherence. 

*The readability of the both the Label cards and Description cards are optimally viewed in Tablet or Laptop screen sizes. 
The text on both the Label cards and the Description cards is quite small (but readable)when viewed on mobile devices. However, it was decided to keep with the images of the text which would all adapt in size uniformly in different viewports rather than adaptive text within the cards themselves as the text length of each card varies and therefore adaptive text would cause text of various sizes within the one game, which can contribute to 'visual clutter' for users and increase congnitive load, therefore making learning less effective.
 
### User Stories

User stories are short, simple descriptions of a feature from the perspective of the end-user or stakeholder. They help to define the desired outcomes and provide a clear understanding of the user's needs and goals. In our project, user stories guided the development process, ensuring that each feature was designed with the user in mind.


| User Role  | User Story |
|------------|------------|
| As a player | I want a clear and easy-to-understand game structure so that I can focus on learning rather than figuring out how to play. |
| As a student | I want the game to be responsive so that I can study on different devices like my phone, tablet, or computer. |
| As a teacher | I want the design to be visually appealing and engaging so that it attracts and retains students' interest. |
| As a player | I want a shuffle function for the cards so that I am learning definitions and not just memorising card locations. |
| As a player | I want to see a start button so that I can begin the game when I am ready. |
| As a player | I want to see a grid of cards face down so that I can start matching pairs. |
| As a player | I want to click on a card to flip it over so that I can see the image or definition on the other side. |
| As a player | I want to see the cards flip back over if they do not match so that I can try again to find a matching pair. |
| As a player | I want to see the cards stay face up if they match so that I know I have found a correct pair. |
| As a player | I want to see a message when I have matched all pairs so that I know I have completed the game. |
| As a player | I want to see a timer counting up so that I can see how long it takes me to complete the game. |
| As a player | I want to see a counter for the number of attempts I have made so that I can track my progress and try to improve. |
| As a player | I want to see a reset button so that I can restart the game at any time. |
| As a player | I want to have different levels so that the game remains challenging and educational. |
| As a player | I want to have access to instructions, so that it’s easy to understand how to play the game. |

<br>

### Fonts

### Images

### Colours

### Wireframes

- Mobile

![Wireframe](readmedocs/Hazards-Match-Mobile-Wireframe.png)
<br>

- Tablet

![Wireframe](readmedocs/Hazards-Match-Tablet-Wireframe.png)
<br>

- Desktop

![Wireframe](readmedocs/Hazards-Match-Desktop-Wireframe.png)
<br>

<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## Features
add some information about the features here

### Navigation
how toplay -instructions modal

### Game board
boardgame area construction with reset board/reset game button

### Game Cards
Symbol/Description Cards with hover/'clicked' feedback, 

### Buttons
add some information about the buttons here, shuffle button
 (background shadow/glow on hover and a little bounce on selected cards)????

### Inputs 
add info about any inputs e.g. the name input with js validation to handle empty inputs

### Scores
Updated score with feedback message/ Number of moves counter?

### Footer
Footer with social links and copyright info, any other info?

### Responsive Design

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


### Future Features
add some inforamtion about future features

<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## Agile Methodology

Throughout this project, our team implemented Agile methodology by using a Kanban board to efficiently manage tasks and ensure a smooth workflow. Utilizing GitHub Project Boards, we set up various user issues, assigning them to team members based on their expertise and availability. This allowed us to visually track the progress of each task, identify bottlenecks, and prioritize work effectively. 

By continuously updating the board and holding regular stand-ups, we maintained clear communication and quickly adapted to any changes, ensuring that we delivered high-quality results in a timely manner. Additionally, the use of GitHub Issues enabled us to document each task with detailed descriptions, acceptance criteria, and labels for easy categorization. This structured approach facilitated clear accountability and enhanced collaboration within the team, helping us achieve our project goals efficiently. 

Before deployment, we verified that all the "must-have" and "should-have" tasks on the Kanban board were completed and the web app was ready for launch. The deployment process was coordinated to ensure the website was hosted on the GitHub platform without any issues. All team members contributed to the preparation of the final presentation, ensuring comprehensive coverage of all project aspects. 
<br>

<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## AI Tools

### Development Process

To help generate the user stories for our project, AI produced a structured process to identify the needs and goals of different stakeholders, such as students and teachers. We crafted our prompts specifically for user stories in a format that clearly articulated the desired outcomes and motivations: "As a ..., I want to..., so I can..." and requested these needs to be processed into acceptance criteria and tasks. This approach ensured that each story was user-centric and aligned with the overall project objectives.

As we worked through the user stories we refined our prompts as necessary to ensure clarity and specificity.
This iterative process allowed us to hone in on the exact requirements and steps needed to meet our UX design goals, and Agile performances, resulting in comprehensive and actionable user stories. By refining our prompts, we could better capture the nuances of each user's needs and ensure that the development process remained focused and aligned with the desired outcomes.

This thorough and systematic method enabled us to create a detailed roadmap for developing the educational card pairing game. It ensured the game was engaging, effective, and tailored to the needs of its users, ultimately enhancing the learning experience for Key Stage ???? students.
<br>

### Generating Code

We utilized AI tools to assist in the initial code generation for our card matching game. By leveraging AI, we were able to quickly establish the foundation of our application using HTML, CSS, Bootstrap, and JavaScript. This strategic use of AI enabled us to generate responsive layouts and interactive elements efficiently, ensuring that our code adhered to best practices and standards. For instance, the AI tools helped us create the card pairing game interface, which included smooth, dynamic interactions with a focus on DOM-manipulation, significantly reducing the time required for manual coding.
<br>

### Debugging Code

AI tools were also instrumental in debugging our code. Throughout development, we utilized AI to continuously analyze various aspects of our code which enabled us to identify and correct code issues promptly through providing suggestions for resolving them. This included detecting syntax errors, reference errors, type errors, etc, and optimizing code performance. For instance, AI-driven optimizations helped us fine-tune the HTML, CSS and JavaScript, resulting in a smooth,  more error-free, engaging gameplay experience for our target audience.
<br>


### Reflections on AI

On reflection, the integration of AI into our project development process has essentially brought about a paradigm shift. It enabled us to speed up our workflow, work smarter and more efficiently by automating mundane tasks, providing intelligent code suggestions, and offering real-time debugging and optimization; In summary, AI tools have supported us in delivering a polished, educational web app game aimed at Science Key Stage ???? students. 
<br>


<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## Deployment


To deploy this project, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/science-shuffle.git
   cd science-shuffle
   ```

2. **Install Dependencies:**
   Make sure you have Node.js and npm installed. Then, run:
   ```sh
   npm install
   ```

3. **Build the Project:**
   ```sh
   npm run build
   ```

4. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```

5. **Access the Live Site:**
   After deployment, you can access your project at `https://your-username.github.io/science-shuffle/`.

<br>
<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## Testing

During the testing phase of our project, we encountered several bugs that needed to be addressed to ensure the game's functionality and user experience were top-notch. Identifying these issues early allowed us to implement targeted solutions and refine our code, ultimately leading to a more polished and reliable product.

### Bug Log

| Bug Discovered | Solution/Potential Solution |
| -------------- | --------------------------- |
| Potential one - if I flip a card, I should not be able to unflip it, and I currently can, and it puts the card out of play! | Fixed by adding more code like lockbox |
| Card game visibility in the viewport - responsivity |  |
| Images not displaying in the grid or flipping in their current position | Resolved by..... (Maebh - can you recall what you did to get the grid correct yesterday? :D so I can add to the README) Our sizing was wrong, I think, and it had the wrong flexbox added |
| When the game was restarted before cards were unflipped, they first shuffled and then unflipped, giving away the new locations of the cards. | I added a time delay to the restart button so that the cards could unflip before being shuffled |
| Timer doesn't stop when the game is finished | Added the clearInterval function to the matchCounter function so that the timer stops when all the cards are matched |
| The 'congrats! you've matched all the cards!' pop-up message appears as the last card is clicked but BEFORE it flips front-face up |  |
<br>


### Validation

Validation is a crucial aspect of the software development process, as it ensures that the product meets the specified requirements and functions as intended. To enhance our validation efforts, we leveraged online validation tools extensively. These tools allowed us to automate testing and quickly identify any discrepancies or errors in our code. By utilizing these tools, we were able to perform rigorous testing and verification, ensuring that each component and feature functioned correctly and met our quality standards. Online validation tools provided real-time feedback and detailed reports, enabling us to address issues promptly and refine our code efficiently.
<br>

#### Lighthouse

#### WAVE

#### W3C - HTML

#### W3C- CSS

<br>
<p align="right"><a href="#science-shuffle">Back To Top</a></p>

## Credits and Acknowledgements


### Credits

 Readme.md
  - [Awesome README](https://github.com/matiassingers/awesome-readme)
  - [README file generator/editor](https://www.readme.so)
  - [Code Institute readme tutorial ](https://www.youtube.com/watch?si=YlDWOkkzvTBjbgs3&v=l1DE7L-4eKQ&feature=youtu.be)
  - [README.md example](https://github.com/TheRickyroy/astronauts-for-autism/blob/main/README.md#tools-and-programs)
  - [Badges](https://github.com/Ileriayo/markdown-badges)


 Content
  - [Interactive Periodic Table](https://artsexperiments.withgoogle.com/periodic-table/)
  - [Periodic Table KS3](https://www.pintrest.com)
  - [GHS warning sign icon vector set illustration stock illustration](https://https://www.istockphoto.com/vector/ghs-warning-sign-icon-vector-set-illustration-gm1400116370-453793774?searchscope=image%2Cfilm) 
  - [Font Readability](https://fonts.google.com/knowledge/readability_and_accessibility/how_type_influences_readability)
  - ![Memory Game in Vanilla Javascript](https://marina-ferreira.github.io/tutorials/js/memory-game/)
  - ![Build Your Own Memory Card Game with HTML, CSS, and JavaScript - Beginner-Friendly Tutorial](https://https://www.youtube.com/watch?v=xWdkt6KSirw)
  - ![How to Create Memory Game in JavaScript](https://www.youtube.com/watch?v=M0egyNvsN-Y)
  
### Acknowledgements

 - Huge thanks to.....
 - Thanks to......
 - Also thanks to.....


<p align="right"><a href="#science-shuffle">Back To Top</a></p>