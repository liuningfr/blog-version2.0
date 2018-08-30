import React from 'react';

const Article = ({ dataSouce }) => (
  <div>
    <h1>{dataSouce.title}</h1>
    <p>{dataSouce.des}</p>
  </div>
);

export default Article;
