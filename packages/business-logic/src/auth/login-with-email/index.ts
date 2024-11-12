import { Collection, getModel } from "@vitalut/constant-definitions";
import { User, UserSchemaMongo } from "@vitalut/entities";
import { sign } from 'jsonwebtoken';
import { Resend } from 'resend';
import { htmlMessage } from "./email-template";

const { JWT_SECRET, RESEND_API_KEY } = process.env;

const resend = new Resend(RESEND_API_KEY);

export const userLoginWithEmail = async({ email, name }: { email: string, name: string }) => {
  const model = getModel<User>(Collection.USERS, UserSchemaMongo);

  let user = await model.findOne({ email });

  if(!user){
      const newUser = new model({name, email})
      await newUser.save();
      user = newUser;
  }

  user.lastLogin = new Date().toString();

  const send = await resend.emails.send({
    from: 'Vitalut <onboarding@resend.dev>',
    to: [user.email],
    subject: 'Verificación de correo electrónico Vitalut',
    html: htmlMessage.replace("{name}", user.name),
  });

  console.log(send)

  const token = sign({id: user._id}, JWT_SECRET!, { expiresIn: '15d' });

  return { token }
}