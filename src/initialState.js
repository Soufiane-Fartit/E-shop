const initialState = {
    filters: {
        'sort': 'latest',
        'proc': 'all',
        'gen': 'all'
    },
    cart: [],
    items : [ 
      {
          'id': 1,
          'name': 'Lenovo Legion',
          'price': 1200,
          'img': 'images/pc-portable-gamer-lenovo-legion-y540-15irh-15.jpg',
          'specs': {
              'cpu': 'i7',
              'gen': '10th'
          }
      },
      {
          'id': 2,
          'name': 'asus vivobook 14',
          'price': 900,
          'img': 'images/asus vivobook 14.jpg',
          'specs': {
              'cpu': 'i5',
              'gen': '10th'
          }
      },
      {
          'id': 3,
          'name': 'asus-zenbook-14',
          'price': 1200,
          'img': 'images/asus-zenbook-14.jpg',
          'specs': {
              'cpu': 'i5',
              'gen': '10th'
          }
      },
      {
          'id': 4,
          'name': 'dell latitude 5400',
          'price': 700,
          'img': 'images/dell latitude 5400.jpg',
          'specs': {
              'cpu': 'amd',
              'gen': '9th'
          }
      },
      {
          'id': 5,
          'name': 'MSI prestige 15',
          'price': 1500,
          'img': 'images/MSI prestige 15.jpg',
          'specs': {
              'cpu': 'i7',
              'gen': '11th'
          }
      },
      {
          'id': 6,
          'name': 'Dell xps 13',
          'price': 1200,
          'img': 'images/dell xps 13.jpg',
          'specs': {
              'cpu': 'i7',
              'gen': '10th'
          }
      },
      {
          'id': 7,
          'name': 'MSI gfe',
          'price': 1800,
          'img': 'images/MSI gfe.jpg',
          'specs': {
              'cpu': 'i9',
              'gen': '11th'
          }
      },
      {
          'id': 8,
          'name': 'Ordinateur HP',
          'price': 1200,
          'img': 'images/hp.jpg',
          'specs': {
              'cpu': 'i5',
              'gen': '9th'
          }
      }
  ]
  }

  export default initialState