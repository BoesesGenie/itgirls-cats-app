import './styles.scss';

class Text {
  constructor(text) {
    this.text = text;
  }

  render() {
    const text = document.createElement('span');

    text.innerText = this.text;
    text.className = 'text';

    return text;
  }
}

export { Text };
