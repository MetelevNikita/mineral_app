import jwt from 'jsonwebtoken'


export function verifyToken (token: string) {



  try {



    if(!token || token === undefined) {
      return { valid: false, error: 'Token доступа отсутствует' }
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
    console.log('DECODE TOKEN ', decoded)

    return { valid: true, decoded };
  } catch (error: Error | unknown) {

    if(error instanceof Error) {
      return { valid: true, error: error.message };
    }
    return { valid: false, error: 'неизвестная ошибка' };
  }


}