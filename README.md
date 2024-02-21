# Atlas FE page

## Overview

This project showcases a single-page application with a dynamic menu interfacing with a GraphQL endpoint. Developed using React.js, TypeScript, and Apollo Client, it demonstrates a modern approach to building responsive and interactive web applications. The project leverages Tailwind CSS for styling and Framer Motion for smooth animations, offering a polished user experience. It's deployed and accessible, providing a live demonstration of the capabilities and integration of these technologies. It is backend can be found at https://github.com/talkintomato/Atlas with the branch frontend-compatible

### Technologies Used

- **React.js with TypeScript**
- **Vite**
- **Apollo Client**
- **Tailwind CSS**
- **Framer Motion**

## Features

- **Dynamic Menu Display**: Fetches and presents menu sections, sub-sections, and products according to their `display order` from a GraphQL endpoint.
- **Product Details Modal**: Interactive modals for product details, animated with Framer Motion for a smooth user experience.
- **Responsive Design**: Utilizes Tailwind CSS for a responsive layout that adapts to various screen sizes.
- **Live Deployment**: The project is deployed on Render @ https://atlas-fe.onrender.com/

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository: git clone https://github.com/talkintomato/atlas-fe
2. cd atlas-fe
3. Add .ENV file with variable ```VITE_API_URL = <Your-Atlas-backend-api-endpoint>```
3. npm install
4. npm run dev

## Reflections

### Challenges Faced
Work needed to be done on the backend to accommodate for DisplayOrder and link queries. These were not done previously in the initial backend deployment. 

### Further Improvements
**Redux for State Persistence**
Integrating Redux for state management can significantly enhance the application's scalability and maintainability. Redux provides a centralized store for all the states in your application, making state management more predictable and easier to debug. By leveraging Redux in combination with Apollo Client, we can ensure that the UI components render a consistent state across all parts of the application, even in complex scenarios with deep nested components.

Redux Persist can be incorporated to persist and rehydrate the Redux store for state persistence. This is particularly useful in scenarios where the application needs to maintain its state after a page reload or when navigating between pages. For instance, user session data or the state of the application before the user leaves can be restored seamlessly, improving user experience.

**Refactor Custom Button - Easier Changes, Better Tracking**
Refactoring the custom button component to allow for easier changes and better tracking can significantly improve the development process by making the component more reusable and maintainable. This involves creating a flexible and extensible button component that can adapt to various use cases through props, such as different sizes, colours, loading states, and icons.

**Mobile Responsiveness**
The current implementation of Nav Bar is not optimal for mobile devices, adding a drawer that dynamically renders based on a screen size can be added to support a better mobile experience. 
