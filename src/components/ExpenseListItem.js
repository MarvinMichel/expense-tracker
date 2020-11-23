import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/nl-nl';

numeral.locale('nl-nl');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <li className="list-item">
    <Link to={ `/edit/${id}` }>
      <div>
        <h3 className="list-item__title">{ description }</h3>
        <span className="list-item__sub-title">{ moment(createdAt).format('DD MMMM YYYY') }</span>
      </div>
      <h3 className="list-item__data">{ numeral(amount / 100).format('$0,0.00') }</h3>
    </Link>
  </li>
);

export default ExpenseListItem;
