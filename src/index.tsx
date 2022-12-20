import React from 'react';
import  ReactDOM  from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freelancer website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date ('2022-12-20 17:57:35'),
        },
        {
          id: 2,
          title: 'pc',
          type: 'deposit',
          category:'trabalho',
          amount: 4000,
          createdAt: new Date ('2022-12-15 22:20:35'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
          return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);