require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Drag from './DragComponent';
import Drop from './TargetComponent';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <div style={{ clear: 'both' }}>
          <Drop />
          <Drop />
          <Drop />
        </div>
        <div style={{ clear: 'both' }}>
          <Drag name="DragME" />
          <Drag name="DragME2" />
          <Drag name="DragME3" />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default DragDropContext(HTML5Backend)(AppComponent);
