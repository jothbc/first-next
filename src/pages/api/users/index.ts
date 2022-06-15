import { NextApiRequest, NextApiResponse } from 'next';

export default (_request: NextApiRequest, response: NextApiResponse) => { //serveless

  const users = [
    { id: 1, nome: 'jonathan' },
    { id: 2, nome: 'Rafael' },
    { id: 3, nome: 'Prado' },
    { id: 4, nome: 'Joice' },
  ]
  return response.json(users);
}