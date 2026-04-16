import { Request, Response } from "express";
declare class ZonaController {
    getZonas(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getDataZonas(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getEscuelasPorZona(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getSupervisorZona(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: ZonaController;
export default _default;
//# sourceMappingURL=zonaController.d.ts.map