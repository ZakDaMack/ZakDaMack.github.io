import React from 'react';
import { Typography } from '@mui/material';
import '../styles/Timeline.sass';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  drawTimeline(events) {
    let isLeft = false;
    return events.map((obj, i) => {
      isLeft = !isLeft;
      return (
        <div className={'container ' + (isLeft ? 'left' : 'right')} key={i}>
          <div className="content">
            <Typography variant='h3' color="textSecondary">{obj.title}</Typography>
            <Typography variant='h5' color="textSecondary">{obj.date}</Typography>
            <Typography variant='body1' color="textSecondary" paragraph>{obj.text}</Typography>
          </div>
        </div>
      );
    })
  }

  render() { 
    return (
      <div className="root">
        <div className="timeline">
          {this.drawTimeline(this.props.events)}
        </div> 
      </div>
    );
  }
}
    
export default Timeline;

