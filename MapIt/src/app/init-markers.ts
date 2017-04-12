
export class Init{
  load(){
    if(localStorage.getItem('markers')===null || localStorage.getItem('markers')===undefined){
      console.log('No markers available. Creating');

      var markers = [
        {
          name: 'company one',
          lat:  51.678418,
          lng: 7.809007,
          draggable: true
        },

        {
          name: 'company two',
          lat:  51.678418,
          lng: 9.809007,
          draggable: true
        },

        {
          name: 'company three',
          lat:  51.678418,
          lng: 8.809007,
          draggable: true
        },

        {
          name: 'company four',
          lat:  52.698418,
          lng: 7.809007,
          draggable: true
        },

      ]

      localStorage.setItem('markers', JSON.stringify('markers'));
    }

    else{
      console.log('Loading markers');
    }

  }
}
