import { TDocumentDefinitions } from "pdfmake/interfaces"
import { printer } from "../printer"

export const getHistoryReport = async (): Promise<PDFKit.PDFDocument> => {
    console.log("Report")
    const docDefinition: TDocumentDefinitions = {
        content: ["Hola Mundo", "Nestor Mosquera"]
    }

    return await printer(docDefinition)
}