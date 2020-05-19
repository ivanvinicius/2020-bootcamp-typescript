/** Importação da funcionalidades do express no arquivo index*/
import express from 'express';

import helloWorld from './routes';

const app = express();

/** arquivo externo que faz a utilização das funcionalidades do express */
app.get('/', helloWorld);

app.listen(3333);