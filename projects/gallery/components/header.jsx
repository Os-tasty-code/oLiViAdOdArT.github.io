'use strict';

const e = React.createElement;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<nav>
    <header>~ O's Corner ~ </header>
    <ul>
        <li><a href="../../">Home</a></li>
        <li><a href="../../portfolio.html">Portfolio</a></li>
    </ul>
</nav>);
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Header));