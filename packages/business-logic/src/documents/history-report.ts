import type { TDocumentDefinitions } from "pdfmake/interfaces";

export const historyReport: TDocumentDefinitions = {
    header: {
        text: "Reporte Historial Clinico",
        alignment: "right",
        margin: [ 10, 10 ]
    },
    content: [
        { text: "Reporte de Historial Clínico", alignment: "center", fontSize: 22 },
        { text: "Fecha de generación", alignment: "center" },
        { text: "Información del Paciente", fontSize: 18, marginTop: 20, marginBottom: 10 },
        {
            table: {
                widths: ['*', '*'],
                body: [
                    ["Nombre Completo", "Juan Pérez"],
                    ["Nombre Completo", "20 de Mayo de 1990"],
                    ["Nombre Completo", "Masculino"],
                    ["Nombre Completo", "juan.perez@gmail.com"],
                    ["Nombre Completo", "Calle Falsa 123, Ciudad, País"]
                ]
            }
        },
        { text: "Historial Médico", fontSize: 18, marginTop: 20, marginBottom: 10 },
        {
            table: {
                widths: ['*', '*'],
                body: [
                    ["Nombre Completo", "Juan Pérez"],
                    ["Nombre Completo", "20 de Mayo de 1990"],
                    ["Nombre Completo", "Masculino"],
                    ["Nombre Completo", "juan.perez@gmail.com"],
                    ["Nombre Completo", "Calle Falsa 123, Ciudad, País"]
                ]
            }
        }
    ]
}