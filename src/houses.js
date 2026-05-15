/* Define an array of house objects, each with a unique id, name, and color
   Each house object represents a different property with its own characteristics */
const houses = [
    { id: "casa-1", name: "Casa Naxos", color: "#3b82f6" },
    { id: "casa-2", name: "Villa Mare", color: "#10b981" },
    { id: "casa-3", name: "Appartamento Centro", color: "#f59e0b" },
];

/* Export the array of houses for use in other parts of the application
   This allows other modules to import the list of houses and use it as needed
   "default" export means that when another module imports from this file, it will receive the "houses" array by default 
   without "default", the importing module would need to use a named import to access the "houses" array 
   For example, "import { houses } from './houses.js';" would be required if we were using a named export instead of a default export 
   import houses from './houses.js'; // Example of how to import the houses array in another file */
export default houses;