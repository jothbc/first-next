import { NextApiRequest } from "next";

export default function (req: NextApiRequest, res: NextApiRequest) {

  if(req.method !== 'GET'){
    res.statusCode(404).send();
  }

}