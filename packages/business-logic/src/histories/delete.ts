import { Collection, getModel } from "@vitalut/constant-definitions";
import { History, HistorySchemaMongo } from "@vitalut/entities";

export const deleteHistory = async (id: string) => {
    const model = getModel<History>(Collection.HISTORIES, HistorySchemaMongo);
    const deleted = await model.findByIdAndDelete(id);
    return deleted;
}