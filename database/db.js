const { Pool }= require('pg');

const pool = new Pool({
    host: 'localhost',
    user:'postgres',
    password:'pgsql',
    database:'contactcenter_2018_30_08',
    port:'5432'
});
pool.connect((err) => {
    if (err) {
       console.error('Error acquiring client', err)
    }
      console.log('Concectado a DB postgres')
    });

    module.exports= pool;