import { Collection, getModel } from '@vitalut/constant-definitions';
import { User, UserSchemaMongo } from '@vitalut/entities';
import { sign } from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library'

const { JWT_SECRET, GOOGLE_CLIENT_ID } = process.env;

console.log(GOOGLE_CLIENT_ID)
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const verifyGoogle = async (token: string) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    return {
        email: payload?.email,
        name: payload?.given_name,
        lastname: payload?.family_name,
        photo: payload?.picture
    };
}

export const userLoginGoogle = async({ id }: { id: string }) => {
    const model = getModel<User>(Collection.USERS, UserSchemaMongo);

    const { name, email, lastname, photo } = await verifyGoogle(id);

    let user = await model.findOne({ email });

    if(!user){
        const newUser = new model({name, lastname, email, photo})
        await newUser.save();
        user = newUser;
    }

    user.lastLogin = new Date().toString();

    const token = sign({id: user._id}, JWT_SECRET!, { expiresIn: '15d' });

    return { token }
}