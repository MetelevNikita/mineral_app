import { NextResponse } from "next/server";
import { PrismaClient } from "@/../generated/prisma/client.js";
import sharp from "sharp";
import fs from "fs";
import path from "path";

// 

export const config = {
  api: {
    bodyParser: false
  }
}

const prisma = new PrismaClient();



export const PUT = async (req: Request) => {
  try {
    const formData = await req.formData(); // Используйте formData для получения данных

    // Обрабатываем данные формы
    const userId = formData.get('userId') as string
    const age = formData.get('age') as string;
    const profession = formData.get('profession') as string;
    const bio = formData.get('bio') as string;
    const phone = formData.get('phone') as string;
    const telegram = formData.get('telegram') as string;


    //



      let file: any = formData.get('avatar');
      console.log('Received file:', file);



      let avatarPath = '';


      if (file) {
      const filename = `${Date.now()}-${file.name}`;
      const uploadPath = path.join(process.cwd(), 'src', 'app', 'uploads', 'avatar', filename);
      
      const buffer = await file.arrayBuffer();
      const fileBuffer = Buffer.from(buffer);

      const sharpImage = await sharp(fileBuffer).resize(320, 240).jpeg({ mozjpeg: true, quality: 80 }).toBuffer();
      console.log(sharpImage)

      // Создаем директорию, если она не существует
      const uploadDir = path.join(process.cwd(), 'src', 'app', 'uploads', 'avatar');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      fs.writeFileSync(uploadPath, sharpImage);
      console.log(`File uploaded successfully to ${filename} в формате JPEG!!!!!`);
      avatarPath = `/api/uploads/avatar/${filename}`;  // Сохраняем путь к файлу
    }



    if (!userId) {
      return NextResponse.json({ message: 'User ID not found in session storage' }, { status: 400 });
    }


    const currentProfile = await prisma.profile.findUnique({
      where: { userId: parseInt(userId) },
    });




    const updateData: any = {};

        if (age && age !== '') {
          updateData.age = age;
        }

        if (profession && profession !== '') {
          updateData.profession = profession;
        }

        if (bio && bio !== '') {
          updateData.bio = bio;
        }

        if (phone && phone !== '') {
          updateData.phone = phone;
        }

        if (telegram && telegram !== '') {
          updateData.telegram = telegram;
        }

        if (file) {
          updateData.avatar = avatarPath;
        }


    await prisma.profile.upsert({
      where: { userId: parseInt(userId) },
      update: updateData,
      create: {
        userId: parseInt(userId),
        age: age,
        profession: profession,
        bio: bio,
        phone: phone,
        telegram: telegram,
        avatar: file ? avatarPath : '',
      },

    });      


    return NextResponse.json({ message: 'data is update' }, { status: 200 });

  } catch (error) {
    
    if (error instanceof Error) {
      console.error('Error updating profile:', error.message);
      return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Something went wrong', error: error}, { status: 500 });
  }
};