import { Collection, getModel } from "@vitalut/constant-definitions";
import { History, HistorySchemaMongo } from "@vitalut/entities";

export const updateHistory = async (data: Partial<History>) => {
    const model = getModel<History>(Collection.HISTORIES, HistorySchemaMongo);
    const updated = await model.findByIdAndUpdate(data.id, data);
    return updated;
}