import React from 'react';

const topicsList = [
  { name: 'Berserk', description: 'Berserk is a Japanese manga series written and illustrated by Kentaro Miura. Set in a medieval Europe-inspired dark fantasy world, the story centers on the characters of Guts, a lone mercenary, and Griffith, the leader of a mercenary band called the "Band of the Hawk". Miura premiered a prototype of Berserk in 1988.' },
  { name: 'Demon Slayer', description: 'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.' },
  { name: 'Dragon Ball Z', description: '"Dragon Ball Z" follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. "Dragon Ball Z" teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.' },
  { name: 'One Punch Man', description: 'One-Punch Man is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength.' },
  { name: 'Tokyo Ghoul', description: 'Tokyo Ghoul is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized in Shueisha\'s seinen manga magazine Weekly Young Jump between September 2011 and September 2014, and was collected in fourteen tankōbon volumes.' }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openTopic: null };
    this.selectTopic = this.selectTopic.bind(this);
  }

  render() {
    const topics = topicsList.map(topic => {
      return (
      <div className={'accordion'} key={topic.name}>
        <div onClick={this.selectTopic} className={'accordion-title'}>{topic.name}</div>
        {topic.name === this.state.openTopic && <div className={'accordion-description'}>{topic.description}</div>}
      </div>
      );
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
