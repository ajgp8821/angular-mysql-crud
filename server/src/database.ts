import mysql from 'promise-mysql';

import keys from './keys'

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection =>{
        // Si existe la conexión, lanzo la conexión
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;