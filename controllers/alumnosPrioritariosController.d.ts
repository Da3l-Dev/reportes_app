import type { Request, Response } from "express";
declare class alumnosPrioritariosController {
    getDataPreescolarIndigena(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDataPreescolarGeneral(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDataPrimariaGeneral(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDataPrimariaIndigena(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDataSecundariaGeneral(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDataSecundariaTecnica(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDataTelesecundaria(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: alumnosPrioritariosController;
export default _default;
//# sourceMappingURL=alumnosPrioritariosController.d.ts.map