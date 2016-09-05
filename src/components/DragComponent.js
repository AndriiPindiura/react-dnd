'use strict';

import React from 'react';
import { DragSource } from 'react-dnd';

// require('styles//Drag.scss');

const item = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      window.alert(`You dropped ${item.name} into ${dropResult.name}!`);
    }
  }
};


function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}


// @DragSource('box', dragSource, (connect, monitor) => {
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
// })

class DragComponent extends React.Component {
  render() {
    const style = {
      border: '1px dashed gray',
      backgroundColor: 'white',
      padding: '0.5rem 1rem',
      marginRight: '1.5rem',
      marginBottom: '1.5rem',
      cursor: 'move',
      float: 'left'
    };
    const opacity = this.props.isDragging ? 0.4 : 1;

    return this.props.connectDragSource(
      <div style={Object.assign({}, style, { opacity })}>
        {this.props.name}
      </div>
    );
  }
}

DragComponent.displayName = 'DragComponent';

// Uncomment properties you need
DragComponent.propTypes = {
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired
};
// DragComponent.defaultProps = {};

// export default DragComponent;

export default DragSource('box', item, collect)(DragComponent);
