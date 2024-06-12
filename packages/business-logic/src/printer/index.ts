import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { historyReport } from "../documents/history-report";
const fonts = {
    Roboto: {
        normal: "fonts/Roboto-Regular.ttf",
        bold: "fonts/Roboto-Medium.ttf",
        italics: "fonts/Roboto-Italic.ttf",
        bolditalics: "fonts/Roboto-MediumItalic.ttf"

    }
}

export const printer = async (docDefinitions: TDocumentDefinitions) => {
    console.log(docDefinitions)
    const printer = new PdfPrinter(fonts);
    return await printer.createPdfKitDocument(historyReport);
}