# Code Block Web App

A real-time coding web app built with Next.js, Monaco Editor, and Shadcn.

## Description

The Code Block Web App is a collaborative coding platform that allows mentors and students to work together on code blocks in real-time. The app is built using Next.js for server-side rendering, Monaco Editor for code editing, and Shadcn for the designed components.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Demo](#demo)


## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/RoiyM/nextjs-approuter-shadcn.git
nextjs-approuter-shadcn
```

2. Install dependencies:

```sh
npm install

```

3. Start the development server:

```sh
npm run dev
```

## Features
Lobby page for code block selection.
Code block page with real-time collaboration using Socket.
Read-only mode for mentors and code editing for students.

## Usage
# Lobby Page
Access the web app via the browser.
On the Lobby page, you will see the title "Choose code block" and a list of code blocks.
Click on any code block to proceed to the Code Block page with the selected code block details.

# Code Block Page
Both mentors and students can access the Code Block page by selecting a code block from the Lobby.
The first user to access the Code Block page becomes the mentor, and any subsequent users are counted as students.
If you are the mentor, you will see the code block in read-only mode.
If you are a student, you will see the code block with the ability to edit the code.
Any code changes made by students will be displayed in real-time to all users on the same Code Block page (Socket-based real-time collaboration).

## Demo
View a live demo of the project [here](https://nextjs-approuter-shadcn-production-8634.up.railway.app/
).
