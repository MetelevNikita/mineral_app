import { CSSProperties, FC } from 'react'
import Image, { StaticImageData } from 'next/image'

// style

import styles from './AchievementsBlock.module.css'

interface AchievementsBlockProps {
  img: StaticImageData | string
  title: string
  num: string | number
  activeAchievements: CSSProperties
}

const AchievementsBlock: FC<AchievementsBlockProps> = ({ img, title, num, activeAchievements }) => {
  return (
    <div className={styles.achievements_block_container} style={activeAchievements}>

      <div className={styles.achievements_block_wrapper}>

          <div className={styles.achievements_block_image_wrapper}>
            <Image className={styles.achievements_block_image} src={img} alt='' width={80} height={70}/>
          </div>

          <div className={styles.achievements_block_text_wrapper}>

            <div className={styles.achievements_block_text_num}>Достижение:</div>
            <div className={styles.achievements_block_text_title}>{title}</div>

          </div>

      </div>
      
    </div>
  )
}

export default AchievementsBlock
