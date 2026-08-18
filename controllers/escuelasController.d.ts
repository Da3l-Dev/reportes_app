import { Response, Request } from "express";
declare class Escuelas {
    getEscuelasOpcionEducativa(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getOpcionEduData(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getNiEscuelaData(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getGeneralEscuelaData(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getTotalOpedu(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: Escuelas;
export default _default;
//# sourceMappingURL=escuelasController.d.ts.map