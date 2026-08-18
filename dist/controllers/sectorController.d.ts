import { Request, Response } from "express";
declare class SectorController {
    getDataSector(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getEcuelasSector(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getSupervisorSector(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: SectorController;
export default _default;
//# sourceMappingURL=sectorController.d.ts.map