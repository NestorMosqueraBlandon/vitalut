import { Collection, getModel } from "@vitalut/constant-definitions";
import { History, HistorySchemaMongo } from "@vitalut/entities";

export const createHistory = async (data: Partial<History>) => {
    const model = getModel<History>(Collection.HISTORIES, HistorySchemaMongo);
    const newHistory = new model(data);
    await newHistory.save();
    return newHistory;
}