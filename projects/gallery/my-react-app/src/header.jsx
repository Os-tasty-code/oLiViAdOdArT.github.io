import React from 'react';

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
};

export default Header;