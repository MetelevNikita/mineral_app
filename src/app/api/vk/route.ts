import { NextResponse } from "next/server";
import fs from 'fs'
import path from "path";






export const POST = async (req: Request, res: Response) => {
  try {


    console.log('Rescponse start')


    const url = new URL(req.url)
    const {code, deviceId, state, codeVerifier, title, message} = await req.json()

    if  (!code || !codeVerifier) {
      return NextResponse.json(
        { error: 'Missing required parameters: code and code_verifier are required' },
        { status: 400 }
      );
    }


    const formData = new URLSearchParams();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', process.env.VK_APP_ID as string);
    formData.append('code_verifier', codeVerifier);
    formData.append('redirect_uri', process.env.REDIRECT_URL as string);
    formData.append('code', code);

    if (deviceId) {
      formData.append('device_id', deviceId)
    }

    const responseToken = await fetch('https://id.vk.ru/oauth2/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });


    const dataToken = await responseToken.text();
    console.log('VK Response status:', responseToken.status);


    if (!responseToken.ok) {
      throw new Error(
        `VK token error ${responseToken.status} ${responseToken.statusText}: ${responseToken}`
      );
    }

    const acceesToken = JSON.parse(dataToken).access_token;
  

    
    // PHOTO


    const responceURLPhoto = await fetch(`https://api.vk.com/method/photos.getWallUploadServer?v=5.131&access_token=${acceesToken}`);

    if (!responceURLPhoto.ok) {
      throw new Error(`Ошибка запроса на сервер - получения статуса ${responceURLPhoto.status}`);
    }

    const dataURL = await responceURLPhoto.json();



    // upload image

    const statusesDir = fs.readdirSync(path.join(process.cwd(), 'public', 'vk_statuses'));
    const currentStatusesImage = statusesDir.find((file) => file.toLocaleLowerCase() == `${title.toLocaleLowerCase()}.png`) as string


    const imageBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'vk_statuses', currentStatusesImage));
    const imageBlob = new Blob([imageBuffer], { type: 'image/png' });
    console.log("Image size:", imageBlob.size, "type:", imageBlob.type);


    const uploadForm = new FormData();
    uploadForm.append('photo', imageBlob, 'image.png');


    const savePhotoFromServer = await fetch(dataURL.response.upload_url, {
      method: 'POST',
      body: uploadForm,
    })

    if (!savePhotoFromServer.ok) {
      throw new Error(
        `Ошибка сохранения изображения ${savePhotoFromServer.status} ${savePhotoFromServer.statusText}`
      )
    }

    const uploadDataResponce = await savePhotoFromServer.json()

    // save photo

    const savePhotoResponse = await fetch('https://api.vk.com/method/photos.saveWallPhoto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        access_token: acceesToken,
        server: uploadDataResponce.server,
        photo: uploadDataResponce.photo,
        hash: uploadDataResponce.hash,
        v: '5.131',
      }),
    });

    const savePhotoData = await savePhotoResponse.json();
    if (savePhotoData.error) {
      return NextResponse.json({ error: savePhotoData.error.error_msg || 'VK API error' }, { status: 400 });
    }


    // 

    const responsePost = await fetch('https://api.vk.com/method/wall.post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        access_token: acceesToken,
        message: message,
        attachments: `photo${savePhotoData.response[0].owner_id}_${savePhotoData.response[0].id}`,
        v: '5.131'
      })
    });

    const data = await responsePost.json();

    if (data.error) {
      return NextResponse.json(
        { error: data.error.error_msg || 'VK API error' },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data: 'success' });
    

  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message })
    }

    return NextResponse.json({
      error: {
        message: "Ошибка при получении данных"
      }
    })
    
  }
}