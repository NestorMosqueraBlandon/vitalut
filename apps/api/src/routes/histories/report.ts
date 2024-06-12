import { getHistoryReport } from '@vitalut/business-logic';
import { RouteMethod } from '@vitalut/constant-definitions';
import { RouteOptions } from 'fastify';
import { Writable } from 'stream';


export const getHistoryReportRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/histories/report',
  handler: async (_request, reply) => {
    try {
      // const data = request.body as Partial<History>;
      const history = await getHistoryReport();
      history.info.title = "Historia_Clinica"
      // history.pipe(reply)
      reply.header('Content-Disposition', 'attachment; filename="Historia_Clinica.pdf"');
      reply.header('Content-Type', 'application/pdf')

      const buffer = await new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        const stream = new Writable({
           write: (chunk: Buffer, _:string, next: (error?: Error | null) => void) => {
              chunks.push(chunk);
              next();
           }
        });
        stream.once('error', (err) => reject(err));
        stream.once('close', () => resolve(Buffer.concat(chunks)));
    
        history.pipe(stream);
        history.end();
      });
      // Pipe el stream del PDF directamente a la respuesta HTTP
      reply.type('application/pdf').code(200).send(buffer);
      // await history.end();
      // reply.send(history);

    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  }
};