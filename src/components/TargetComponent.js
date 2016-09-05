'use strict';

import React from 'react';
import { DropTarget } from 'react-dnd';
// import Drag from './DragComponent';


// require('styles//Target.scss');

const itemTarget = {
  drop() {
    return { name: 'DropTEST'}
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class TargetComponent extends React.Component {
  render() {
    console.log(this.props);
    const style = {
      height: '12rem',
      width: '12rem',
      marginRight: '1.5rem',
      marginBottom: '1.5rem',
      padding: '1rem',
      border: '1px solid #000',
      color: 'black',
      textAlign: 'center',
      fontSize: '1rem',
      lineHeight: 'normal',
      float: 'left'
    };

    const backGround = this.props.canDrop && this.props.isOver ? 'darkgreen' : this.props.canDrop ? 'darkhaki' : '#222';

    return this.props.connectDropTarget(
      <div style={Object.assign({}, style, { backGround })}>
        {this.props.canDrop && this.props.isOver ? 'Release to drop' : 'Drag a box here'}
        {/* <Drag name="DragME" /> */}
      </div>
    );
  }
}

TargetComponent.displayName = 'TargetComponent';

// Uncomment properties you need
TargetComponent.propTypes = {
  connectDropTarget: React.PropTypes.func.isRequired,
  isOver: React.PropTypes.bool.isRequired,
  canDrop: React.PropTypes.bool.isRequired,
};
// TargetComponent.defaultProps = {};

export default DropTarget('box', itemTarget, collect)(TargetComponent);
// export default TargetComponent;
