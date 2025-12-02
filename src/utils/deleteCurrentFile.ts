import fs from 'fs'
import path from 'path'


export const deleteCurrentFile = async (data: string, endFolder: string) => {
  try {

    console.log(data)

    // get file name

    const pathParse = path.parse(data)

    if (!pathParse) {
      console.error('Ошибка получения имени файла')
      return
    }
    const fileName = pathParse.base

    // get url from file

    const deletePath = path.join(process.cwd(), 'src', 'app', 'uploads', endFolder)

    if (!fs.existsSync(deletePath)) {
      console.error('Папка не найдена')
      return
    }


    fs.unlinkSync(path.join(deletePath, fileName))

    return `Файл ${fileName} из папки ${deletePath} успешно удален`


    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error('Ошибка удаления изображения ' + error.message)
      return
    }


    console.error('Ошибка удаления изображения ' + error)
    return
  }
}