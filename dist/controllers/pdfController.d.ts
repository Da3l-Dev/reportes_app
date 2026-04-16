import { Request, Response } from "express";
export declare function reportSectorGenerate(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function reportZonaGenerate(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function serveMainView(req: Request, res: Response): Promise<void>;
export declare function renderOpcEdu(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function reportEscuelas(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function viewOpcEduHtml(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=pdfController.d.ts.map