'use client'

import { FC } from 'react'

interface ShareButtonPhpProps {
  title: string
  icon: string
}

const ShareButtonPhpProps: FC<ShareButtonPhpProps> = ({ title, icon }) => {


  const messageStatus = `Вы достигли уровня ${title} на сайте geokviz.ru`


  const shareToVK = () => {
    const shareUrl = `https://vk.com/share.php?` +
      `url=${encodeURIComponent('https://geokviz.ru')}&` +
      `title=${encodeURIComponent(`Достижение: ${title}`)}&` +
      `description=${encodeURIComponent(`Я достигл уровня ${title} на сайте geokviz.ru`)}&` +
      `image=${encodeURIComponent('https://geokviz.ru/vk_statuses/главный геолог.png')}`;
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }

  return (
    <button 
      onClick={shareToVK}
      className="flex items-center gap-2 p-3 bg-[#4a76a8] text-white rounded-lg hover:bg-[#3d638f] transition-colors"
    >
      <span className="text-lg">📢</span>
      <span>Поделиться в VK</span>
    </button>
  )
}

export default ShareButtonPhpProps