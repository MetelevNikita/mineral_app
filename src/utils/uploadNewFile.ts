import fs from 'fs'
import path from "path";

// 

export const uploadNewFile = async (file: File, endFolder: string) => {
  try {

    const fileExt = path.extname(file.name)
    if (fileExt === '.png' || fileExt === '.jpg' || fileExt === '.jpeg' || fileExt === '.svg') {

      const uploadDir = path.join(process.cwd(), 'src', 'app', 'uploads', endFolder)

      if (!fs.existsSync(uploadDir)) {
        try {
          fs.mkdirSync(uploadDir, { recursive: true })
          console.log('Папка создана')
        } catch (error) {
          console.error('Ошибка при создании папки', error)
        }
      }

      // 

      const BufferImage = await file.arrayBuffer()
      const fileBuffer = Buffer.from(BufferImage)


      const sizeInMB = fileBuffer.length / (1024 * 1024)
      console.log(`Размер буфера: ${sizeInMB.toFixed(2)} MB`)

      if (sizeInMB > 3) {
        try {
          return {
              message: 'Размер файла превышает 3 МБ',
              status: 404
          }
        } catch (error) {
          console.error('Ошибка при проверке размера файла', error)
          return {
              message: 'Размер файла превышает 3 МБ',
              status: 404
          }
        }
      }

      const currentNameformUUID = `${Date.now()}_${file.name}`

      // upload file

      const result = fs.writeFileSync(path.join(uploadDir, currentNameformUUID), fileBuffer)
      console.log(result)
      console.log(`Файл ${file.name} в папку ${endFolder} успешно загружен`)

      // return
      
      return `/api/uploads/${endFolder}/${currentNameformUUID}`
      
    
    } else {
      throw new Error('Неверный формат файла')
    }
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error('Ошибка загрузки изображения ' + error.message)
    }
  }
}