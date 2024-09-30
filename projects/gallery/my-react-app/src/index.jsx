
import Header from './header.jsx'; // Adjust path as needed
import Main from './main.jsx'; // Adjust path as needed

const head = [{
  name: "Home",
  path: ""
},
{
  name: "Portfolio",
  path: "portfolio.html"
}
];

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