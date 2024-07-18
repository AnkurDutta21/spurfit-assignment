# Spur.fit Assignment

This project is a React-based workout builder application where users can drag and drop different workout blocks to create a custom workout. The application is styled using Tailwind CSS and uses `react-beautiful-dnd` for drag-and-drop functionality.

## Features

- **Drag and Drop**: Add workout blocks to the graph by dragging them from the list.
- **Dynamic Rendering**: The graph updates dynamically based on the blocks added.
- **Clear Blocks**: Reset the graph with a "Clear Blocks" button.
- **Styled with Tailwind CSS**: For modern design.
- **ToolTip with react-tooltip**: For user friendly interactions

## Demo
 https://github.com/user-attachments/assets/0692d28a-8e3c-4935-9b6d-1a466f8503e5

  
## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/AnkurDutta21/spurfit-assignment.git
    cd workout-builder
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```
## Usage

1. Open your browser and navigate to `http://localhost:3000` to see the application in action.
2. Drag and drop blocks from the "Add Workout" section to the "Graph" section to build your workout.
3. Click the "Clear Blocks" button to reset the graph and start over.

## Components

- **Topbar**: Displays the page title and a button for additional actions.
- **AddWorkout**: Contains draggable workout blocks that can be added to the graph.
- **Graph**: Visual representation of the workout blocks, supports drag-and-drop functionality.
- **Steps**: Displays the added blocks and allows further customization.