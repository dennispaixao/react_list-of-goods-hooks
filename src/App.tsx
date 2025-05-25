import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  // Estado para gerenciar a lista atual
  const [goods, setGoods] = useState(goodsFromServer);

  const sortAlphabetically = () => {
    const sorted = [...goods].sort((a, b) => a.localeCompare(b));

    setGoods(sorted);
  };

  const sortByLength = () => {
    const sorted = [...goods].sort((a, b) => a.length - b.length);

    setGoods(sorted);
  };

  // CORREÇÃO CRÍTICA: sempre reverte a lista original
  const reverse = () => {
    const reversed = [...goods].reverse();

    setGoods(reversed);
  };

  const reset = () => {
    setGoods([...goodsFromServer]);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      {/* CORREÇÃO: estrutura HTML válida e lista dinâmica */}
      <ul>
        {goods.map((item, index) => (
          <li key={`${item}-${index}`} data-cy="Good">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
