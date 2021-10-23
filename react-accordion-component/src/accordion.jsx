import React from 'react';

const topicsList = [
  { name: 'JavaScript', description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' },
  { name: 'Hypertext Markup Language', description: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openTopic: null };
    this.selectTopic = this.selectTopic.bind(this);
  }

  render() {
    const topics = topicsList.map(topic => {
      if (!this.state.openTopic) {
        return (
        <div className={'accordion'} key={topic.name}>
          <div onClick={this.selectTopic} className={'accordion-title'}>{topic.name}</div>
        </div>
        );
      } else if (this.state.openTopic === topic.name) {
        console.log(event.target.textContent);
        return (
        <div className={'accordion'} key={topic.name}>
          <div onClick={this.selectTopic} className={'accordion-title'}>{topic.name}</div>
          <div className={'accordion-description'}>{topic.description}</div>
        </div>
        );
      }
    });
    return topics;
  }

  selectTopic() {
    if (this.state.openTopic === event.target.textContent) {
      this.setState({ openTopic: null });
    } else {
      this.setState({ openTopic: event.target.textContent });
    }
  }
}

export default Accordion;
