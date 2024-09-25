'use strict';

const head = [
  {
    name: "Home",
    path: ""
  },
  {
    name: "Portfolio",
    path: "portfolio.html"
  }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const navi = this.props.val.map((val) => {
      const path = "../../" + val.path;
      return <li><a href={path}>{val.name}</a></li>
    })
    
    return (<nav>
      <header>~ O's Corner ~ </header>
      <ul>
        {navi}
      </ul>
  </nav>);
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<main>
      {this.props.children}
  </main>);
  }
}

const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <div id="parent">
    <Header val={head} ></Header>
    <Main>
  <div class="content">
    <h2>Olivia "O" Dodart</h2>
    <h5>they/them</h5>
    <p>
      George Mason University, Class of 2023
    </p>
    <section class="showcase">
      <a href='https://www.linkedin.com/in/o-dodart-091592228/'><img src='../../images/linkedin.png' class="icon"></img></a>
      <a href='https://gmu.joinhandshake.com/stu/users/24210195'><img src='../../images/handshake.png' class="icon"></img></a>
    </section>
    </div><div class="sidebar">
        <img src="../../images/profile.jpg"></img>
      </div>
  </Main>
  </div>
);