export declare function renderReportZona(dataZona: any[], dataMapaZona: any[], dataZonaPorEscuela: any[]): string;
export declare function renderReportSector(dataSector: any[], dataEscuelas: any[], dataZonaPorEscuela: any[]): string;
export declare function renderReportGeneral(dataGeneral: any[], dataEscuelas: any[], dataZonaPorEscuela: any[]): Promise<string>;
export declare function renderOpcionEduReport(dataOpcion: any[], dataEscuelas: any[], dataZonaPorEscuela: any[], totalesOpEdu: any): Promise<string>;
export declare function renderEscuela(dataNiEscuela: any[], dataGeneralEscuela: any[], dataZona: any[], dataAlumnosPrioritarios: any[]): Promise<string>;
export default function renderSisatOpEdu(primeraExploracion?: any[], // 👈 Valor por defecto array vacío
segundaExploracion?: any[], // 👈 Valor por defecto array vacío
terceraExploracion?: any[], // 👈 NUEVO PARÁMETRO con valor por defecto
dataEscuelas?: any[]): string;
export declare function renderMainView(): Promise<string>;
export declare function renderDashboardExploracion(): Promise<string>;
export declare function renderGraficaGlobalSisat(primeraExploracion?: any[], segundaExploracion?: any[], terceraExploracion?: any[]): string;
export declare function renderTablaSisatOpEdu(primeraExploracion?: any[], segundaExploracion?: any[], terceraExploracion?: any[], dataEscuelas?: any[], chunkIndex?: number, totalChunks?: number): string;
//# sourceMappingURL=renderReport.d.ts.map