import { Request, Response } from "express";
declare class ExploracionSisatController {
    constructor();
    getPrimeraExploracion(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getSegundaExploracion(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getTerceraExploracion(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export default ExploracionSisatController;
//# sourceMappingURL=explo_sisat_controller.d.ts.map