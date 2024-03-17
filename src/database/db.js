const { MongoClient } = require('mongodb');

// const uri =
//   'mongodb+srv://vadim:WHkEDKmm1TiEA2BJ@cluster0.q36ae0s.mongodb.net/?retryWrites=true&w=majority';
//const uri = 'mongodb+srv://jonathannicolasdev:JMY76dGse6QBXWxl@example.zbn8jps.mongodb.net/?retryWrites=true&w=majority&appName=example'


const uri = 'mongodb+srv://jonathannicolasdev:JMY76dGse6QBXWxl@example.zbn8jps.mongodb.net/'
let client;

const getDB = () => {
  if (!client) {
    console.log('Creating a new client!');
    client = new MongoClient(uri);
  } else {
    console.log('Reusing the old client');
  }

  const database = client.db('Nike');
  const products = database.collection('products');
  const orders = database.collection('orders');

  return {
    products,
    orders,
  };
};

module.exports = getDB;
