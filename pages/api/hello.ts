// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
import path from 'path';
import PdfParse from 'pdf-parse';

type Data = {
  text: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), 'pdfs');
  const fileContents = await fs.readFile(jsonDirectory + '/teste2.pdf');
  const parse = await PdfParse(fileContents);
  let  arrayText = parse.text.split('\n')

  arrayText =  arrayText.filter((text)=>{
    if(text.trim()==="" || !isNaN(Number(text.trim())) ) {return false}

    return true;

  })

  res.status(200).json({ text: arrayText })
}
