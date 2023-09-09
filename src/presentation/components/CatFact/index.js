import { Text } from '../../ui-kit/Text';
import { Button } from '../../ui-kit/Button';
import { getFact } from '../../../infrastructure/catsApi';

class CatFact {
  fact = 'Здесь пока ничего нет';

  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'cat-fact';
  }

  updateFact = async () => {
    this.fact = await getFact();

    this.render();
  }

  render() {
    this.wrapper.innerHTML = '';

    const fact = document.createElement('p');

    fact.appendChild(new Text(this.fact).render());
    this.wrapper.appendChild(
      new Button(
        this.updateFact,
        'Новый факт о кошках'
      ).render()
    );
    this.wrapper.appendChild(fact);

    return this.wrapper;
  }
}

export { CatFact };
