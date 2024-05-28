import { Collection, getModel } from "@vitalut/constant-definitions";
import { User, UserSchemaMongo } from "@vitalut/entities";

export const getUserById = async (id : string ) => {
  const model = getModel<User>(Collection.USERS, UserSchemaMongo);
  const user = await model.findById(id);
  return user;
};
