import React from 'react';
import Header from './components/Header';
import bg3 from './image/bg3.jpg';
class App extends React.Component {
    render() {
        return (
            <div style={divStyle}>
            <Header />
            </div>
        )
    }
}
const divStyle = {
    backgroundColor:'#9edde6',
    height:'100vh',
    flexDirection: 'row'
  };
export default App;