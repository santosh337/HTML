function Header() {
    return (
      <div className="main_container">
        <h1>Topics Covered</h1>
      </div>
    );
  }
  
  function FirstColumn() {
    return (
      <div>
        <Header />
        <p>The following is the list of all topics that are covered in MDN learning area</p>
        <br></br>

        <p className="para_graph"><a href="https://www.google.com">Getting started with the web</a></p>


    <p>Provide a practical introduction to web development for complete beginner</p>

    <p className="para_graph"><a href="https://www.google.com">HTML - structuring the web</a></p>


    <p>HTML is the language that we use to structure our different part of our content and define what there meaning and purpose is . The topic teaches html in details </p>

    <p className="para_graph"><a href="https://www.google.com">CSS - Stying the web</a></p>


    <p>CSS is the language that we use to control our web content's sytles and layout as well as like adding animation behaviour. the topic cover comprehensive for CSS </p>

      </div>
    );
  }
  
  ReactDOM.render(<FirstColumn/>, document.querySelector("#root"))