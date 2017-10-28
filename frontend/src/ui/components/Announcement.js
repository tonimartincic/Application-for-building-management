import React from 'react';
import {connect} from 'react-redux';

const Announcement = (props) => {
  return (
    <section>
      <span>{props.announcement.content}</span>
    </section>
  );
};

export default Announcement;
