const dictionary = [
  { word: "Algorithm", hint: "Step-by-step procedure to solve a problem" },
  {
    word: "Variable",
    hint: "A storage location identified by a memory address",
  },
  { word: "Database", hint: "Organized collection of data" },
  { word: "JavaScript", hint: "High-level programming language" },
  { word: "Framework", hint: "Reusable set of libraries or tools" },
  { word: "Encryption", hint: "Process of converting data into a code" },
  { word: "API", hint: "Application Programming Interface" },
  { word: "Git", hint: "Version control system for tracking changes" },
  { word: "Responsive", hint: "Design that adapts to different devices" },
  { word: "Scalability", hint: "Ability of a system to handle growth" },
  {
    word: "Container",
    hint: "Lightweight, executable package that includes everything needed to run a piece of software",
  },
  { word: "DevOps", hint: "Collaboration between development and operations" },
  {
    word: "Blockchain",
    hint: "Distributed and decentralized ledger technology",
  },
  {
    word: "Microservices",
    hint: "Architectural style that structures an application as a collection of small, independent services",
  },
  {
    word: "Serverless",
    hint: "Architecture where server management is handled by a cloud provider",
  },
  { word: "JavaScript", hint: "Programming language for web development" },
  {
    word: "Nodejs",
    hint: "JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  { word: "React", hint: "JavaScript library for building user interfaces" },
  { word: "Python", hint: "High-level programming language" },
  {
    word: "RESTful",
    hint: "Representational State Transfer architectural style",
  },
  { word: "GraphQL", hint: "Query language for APIs" },
  {
    word: "Containerization",
    hint: "Encapsulation of an application and its dependencies into a container",
  },
  { word: "Kubernetes", hint: "Open-source container orchestration platform" },
  {
    word: "Blockchain",
    hint: "Distributed and decentralized ledger technology",
  },
  {
    word: "Decentralized",
    hint: "Distributed system where no single entity has control",
  },
  {
    word: "Web3",
    hint: "Next evolution of the internet focused on decentralization",
  },
  { word: "Fork", hint: "Personal copy of someone else's project" },
  {
    word: "Bug",
    hint: "Error or flaw in software that produces incorrect or unexpected results",
  },
  { word: "Debugging", hint: "Process of finding and fixing bugs in software" },
  { word: "Lambda", hint: "Anonymous function in programming" },
  {
    word: "Repository",
    hint: "Central location in which data is stored and managed",
  },
  {
    word: "Syntax",
    hint: "Set of rules for writing programs in a programming language",
  },
  { word: "Framework", hint: "Reusable set of libraries or tools" },
  { word: "HTTP", hint: "Hypertext Transfer Protocol" },
  { word: "Backend", hint: "Server-side of an application" },
  { word: "Frontend", hint: "Client-side of an application" },
  { word: "NPM", hint: "Node Package Manager" },
  { word: "Webpack", hint: "Open-source JavaScript module bundler" },
  {
    word: "Server",
    hint: "Computer or system that manages network resources and provides services to other computers in the network",
  },
  { word: "Azure", hint: "Cloud computing service created by Microsoft" },
  { word: "AWS", hint: "Amazon Web Services" },
  { word: "Google Cloud", hint: "Cloud computing services by Google" },
  {
    word: "Docker",
    hint: "Platform for developing, shipping, and running applications in containers",
  },
  { word: "GraphQL", hint: "Query language for APIs" },
  {
    word: "Linting",
    hint: "Static code analysis to find problems and ensure consistency in code style",
  },
  {
    word: "WebSocket",
    hint: "Communication protocol that provides full-duplex communication channels over a single TCP connection",
  },
  {
    word: "JWT",
    hint: "JSON Web Token - a compact, URL-safe means of representing claims to be transferred between two parties",
  },
  { word: "OAuth", hint: "Open standard for access delegation" },
  {
    word: "Agile",

    hint: "Project management and product development approach",
  },
  {
    word: "Kanban",
    hint: "Method for managing knowledge work with an emphasis on just-in-time delivery while not overloading the team members",
  },
  { word: "Linux", hint: "Open-source, Unix-like operating system kernel" },
  {
    word: "Unix",
    hint: "Operating system family that includes Linux and macOS",
  },
  {
    word: "Regex",
    hint: "Sequence of characters that defines a search pattern",
  },

  {
    word: "Serverless",
    hint: "Architecture where server management is handled by a cloud provider",
  },
  {
    word: "Agile",
    hint: "Project management and product development approach",
  },
  {
    word: "Scrum",
    hint: "Framework within which people can address complex adaptive problems",
  },
  {
    word: "Kanban",
    hint: "Method for managing knowledge work with an emphasis on just-in-time delivery while not overloading the team members",
  },
  { word: "GraphQL", hint: "Query language for APIs" },
  {
    word: "WebAssembly",
    hint: "Binary instruction format for a stack-based virtual machine",
  },
  {
    word: "CORS",
    hint: "Cross-Origin Resource Sharing - a security feature implemented by web browsers",
  },
  {
    word: "JWT",
    hint: "JSON Web Token - a compact, URL-safe means of representing claims to be transferred between two parties",
  },
  { word: "OAuth", hint: "Open standard for access delegation" },
  { word: "GraphQL", hint: "Query language for APIs" },
  {
    word: "WebSockets",
    hint: "Communication protocol that provides full-duplex communication channels over a single TCP connection",
  },

  {
    word: "JWT",
    hint: "JSON Web Token - a compact, URL-safe means of representing claims to be transferred between two parties",
  },
  { word: "OAuth", hint: "Open standard for access delegation" },
  {
    word: "Agile",
    hint: "Project management and product development approach",
  },
  {
    word: "Kanban",
    hint: "Method for managing knowledge work with an emphasis on just-in-time delivery while not overloading the team members",
  },
  { word: "Linux", hint: "Open-source, Unix-like operating system kernel" },
  {
    word: "Unix",
    hint: "Operating system family that includes Linux and macOS",
  },
  {
    word: "Regex",
    hint: "Sequence of characters that defines a search pattern",
  },

  {
    word: "Serverless",
    hint: "Architecture where server management is handled by a cloud provider",
  },

  {
    word: "Agile",
    hint: "Project management and product development approach",
  },
  {
    word: "Scrum",
    hint: "Framework within which people can address complex adaptive problems",
  },
  {
    word: "Kanban",
    hint: "Method for managing knowledge work with an emphasis on just-in-time delivery while not overloading the team members",
  },

  { word: "GraphQL", hint: "Query language for APIs" },

  {
    word: "WebAssembly",
    hint: "Binary instruction format for a stack-based virtual machine",
  },

  {
    word: "CORS",
    hint: "Cross-Origin Resource Sharing - a security feature implemented by web browsers",
  },
];

export default dictionary;
