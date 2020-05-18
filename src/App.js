import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import {customHistory} from './customHistory';
class App extends React.Component {
    render() {
        return (
            <Router>
                <div style={divStyle}>
                <Header />
                </div>
            </Router>
        )
    }
}
const divStyle = {
    backgroundColor:'#9edde6',
    height:'100vh',
    flexDirection: 'row'
  };
export default App;