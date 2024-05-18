# There are three life-cycle phases.

# Mounting: creating a component and inserting it into the DOM
# Updating: re-render the component when updating is needed.
# Unmounting: removing the component from the DOM. 

# useState: For managing state in functional components.
# useEffect: For handling side effects such as fetching data, subscriptions, or manually changing the DOM.
# useContext: For accessing context values in functional components.
# useRef: For accessing and manipulating DOM elements or keeping mutable variables.
# useReducer: For managing more complex state logic in functional components, often as an alternative to useState.

# Router: this allows us to define routes and navigate between components based on the URL.

# Router enables routing in the application.
# Link components provide navigation links.
# Routes and route components define mapping between URL paths and the components to render
# When a link is clicked the corresponding component is rendered based on the URL path.

# You can use the below link for a placeholder json infos
# (https://jsonplaceholder.typicode.com/posts)

<!--  useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false)
        })
    }, []); // Empty dependency array means this runs once after the initial render.  -->

# Memoization is a performance optimization techinque used to speed up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

# Using typescript provides type safety and and better development experience with autocomplete and error checking.

# It's advisable to use the below file structure.
<!-- src/
  components/
    Header.js
    Footer.js
  pages/
    Home.js
    About.js
  hooks/
    useFetch.js -->

# Design pattern in react.

# Container Components: Handle data fetching and state managment.
# Presentation Components: Handle Rendering UI's.
# Higher-Order-Components: (HOC's) => are functions that receive components and return components with additional behavior or props.

<!-- 1. Build Projects
Start building real-world projects to apply what you've learned.
Choose projects of increasing complexity to challenge yourself.
Consider projects like:
To-Do List Application
Blogging Platform
E-commerce Website
Social Media Dashboard
Weather App
2. Explore Advanced React Concepts
Dive deeper into advanced React concepts such as:
Context API for managing global state
Error boundaries for handling errors in components
Portals for rendering children into a different DOM node
Higher-order components (HOCs) and render props for code reusability
Custom hooks for encapsulating reusable logic
React performance optimization techniques
3. Learn State Management
Explore state management libraries like Redux, MobX, or Recoil.
Understand the concepts of state, actions, reducers, and selectors.
Practice integrating state management into your projects for better organization and scalability.
4. Master Routing
Learn client-side routing with libraries like React Router.
Understand nested routes, route parameters, and route guards.
Implement routing in your projects to create multi-page applications with navigation.
5. Study Testing
Learn about testing React components using tools like Jest and React Testing Library.
Practice writing unit tests, integration tests, and end-to-end tests for your React applications.
Aim for high test coverage to ensure the reliability and maintainability of your code.
6. Explore React Ecosystem
Explore popular React libraries and frameworks for specific use cases:
Material-UI for UI components and styling
Formik for building forms with ease
React Query for managing data fetching and caching
Next.js for server-side rendering and static site generation
Gatsby.js for building fast, SEO-friendly static websites
7. Follow Best Practices
Stay updated with React best practices and design patterns.
Read blogs, articles, and documentation to keep improving your skills.
Review code from open-source projects and learn from experienced developers.
8. Contribute to Open Source
Contribute to React-related open-source projects on GitHub.
Fix bugs, add features, or improve documentation to gain practical experience and collaborate with the community.
Participate in discussions and seek feedback on your contributions.
9. Join Communities
Join online communities like Reddit, Stack Overflow, or Discord servers dedicated to React.
Engage with other developers, ask questions, and share your knowledge and experiences.
Attend React meetups, workshops, and conferences to network and stay updated with industry trends.
10. Continuous Learning
React and web development are continuously evolving fields.
Stay curious and keep learning new technologies, tools, and techniques to stay ahead in your career.
Experiment with new ideas, prototypes, and side projects to broaden your skill set. -->
