function Header() {
    return (
      <div className="main_container">
        <h1 className="header">Learn Web Development</h1>
      </div>
    );
  }
  
  function FirstColumn() {
    return (
      <div>
        <Header />
        <p>MDN Web Docs, previously Mozilla Developer Network and formerly Mozilla Developer Center, is a documentation repository and learning resource for web developers. It was started by Mozilla in 2005 as a unified place for documentation about open web standards, Mozilla's own projects, and developer guides.</p>
        <br></br>

        <p>Creating links in React is a fundamental skill in web development. It allows you to create interactive applications where users can navigate between different parts of your application.
        <br></br>

    Remember, to create a link in React, you use the <a href="https://www.google.com">the rest of MDN</a> component from the 'react-router-dom' library, and you use the 'to' attribute to specify the destination of the link. And, you can use variables in your JSX to create dynamic links that change based on the state of your application.
    
    So, there you have it. Creating a link in React is as simple as importing the 'Link' component, and using the 'to' attribute to specify your link destination. Happy coding!</p>


    <p>Creating links in React is a fundamental skill in web development. It allows you to create interactive applications where users can navigate between different parts of your application.</p>
      </div>
    );
  }
  
  ReactDOM.render(<FirstColumn/>, document.querySelector("#root"))