/** Fazendo a importação dos tipos do express */
import { Request, Response } from 'express';

/**Utilizando os tipos nos parâmetros da função */
export default function helloWorld(request: Request, response: Response) {
  return response.json({message: 'Hello world'});
}