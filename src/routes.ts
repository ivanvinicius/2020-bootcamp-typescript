import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export default function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'ivan', 
    email: 'ivan@gmai.com', 
    password: '123',
    techs: [
      'React Native',
      {
        technology: 'javascript',
        experienceLevel: 3
      },
      'React Js',
      {
        technology: 'javascript',
        experienceLevel: 5
      },
      'Node Js',
      {
        technology: 'javascript',
        experienceLevel: 7
      },
    ]
  });


  return response.json({message: 'Hello world'});
}