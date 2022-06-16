import { NextApiRequest, NextApiResponse } from 'next';

const properties = (_request: NextApiRequest, response: NextApiResponse) => { //serveless

  const properties = [
    { id: 1, name: 'imovel n 1', tags: ['tag1', 'tag2'] , src: 'https://imobille-img-storage.s3.amazonaws.com/real-estates/November2021/4Fo2oWZyDFnrxgoEUB7e.jpg'},
    { id: 2, name: 'imovel n 2', tags: ['tag2'] , src: 'https://imobille-img-storage.s3.amazonaws.com/real-estates/November2021/v7GIGT6WZu8r5zmn1VVE.jpg'},
    { id: 3, name: 'imovel n 3', tags: ['tag1', 'tag2', 'tag3'], src: 'https://imobille-img-storage.s3.amazonaws.com/real-estates/November2021/G8epKeB7vzjkVxSRwv95.jpg' },
    { id: 4, name: 'imovel n 4', tags: ['tag1'] , src: 'https://imobille-img-storage.s3.amazonaws.com/real-estates/September2021/o5RcriftygBEVOk1Lz1Y.jpg'},
    { id: 5, name: 'imovel n 5', tags: [] , src: 'https://imobille-img-storage.s3.amazonaws.com/real-estates/November2021/SkazwxeDTEfmcIBxphM2.jpg'},
  ]
  return response.json(properties);
}
export default properties;