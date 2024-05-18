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
