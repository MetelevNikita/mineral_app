import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

// styles

import styles from './EditMinerals.module.css'

// bootstrap

import {Row, Col} from 'react-bootstrap'

// functions

import { getMineral } from '@/functions/minerale/getMineral'

// UI

import MyInput from '@/components/ui/MyInput/MyInput'
import MyButton from '@/components/ui/MyButton/MyButton'

// componnets

import MineralComponent from '../../ui/mineralComponent/MineralComponent'

//



interface EditMineralsProps {
  contextMenu: {
    menu: {id: number, label: string, value: string}[] | any,
    setMenu: any
  },

  contextMenuActive: {
    menuActive: {id: number, label: string, value: string} | any,
    setMenuActive: any
  },

}

const EditMinerals: FC<EditMineralsProps> = ({ contextMenu, contextMenuActive }) => {

  const [minerals, setMinerals] = useState<any[]>([])
  const [searchText, setSearchText] = useState<string | null>(null)


  const { menu, setMenu } = contextMenu
  const { menuActive, setMenuActive } = contextMenuActive



  useEffect(() => {
    const minerals = async () => {
      const data = await getMineral()
      setMinerals(data)
    }

    minerals()
  }, [])


  const searchMineralData = (searchText === null) ? minerals : minerals.filter((mineral: any) => mineral.title.toLowerCase().includes(searchText.toLowerCase()))


  const handleOpenMineral = (id: string) => {
    try {

      console.log('ID этого минерала ', id)
      setMenuActive({id: id, label: 'Изменить минерал', value: 'change_mineral'})
      
    } catch (error) {
      console.log(error)
    }
  }

  // 



  return (

    <Row>
      <Col>
      
        <div className={styles.mineral_container}>

          <div className={styles.mineral_title}>Минералы</div>

            <div className={styles.mineral_wrapper}>



                <MyInput
                  type={''}
                  placeholder={'Найти минерал'}
                  style={{}}
                  value={searchText ?? ''}
                  onChange={(e: any) => {
                    setSearchText(e.target.value)
                  }}/>

                <MyButton
                  text={'Добавить минерал'}
                  btn={styles.btn_search}
                  onClick={() => {
                    setMenuActive({
                      id: 5,
                      label: 'Новый минерал',
                      value: 'new_mineral'
                    })
                  }}
                  type={'button'} />




    
              {
                (!minerals || minerals.length === 0) ? <div>Список минерало пуст</div> : searchMineralData.map((mineral: any, index: number): React.ReactNode => {
                  return (
                    <MineralComponent key={index+1} title={mineral.title} id={mineral.id} open={handleOpenMineral}/>
                  )
                })
              }



            </div>

        </div>
      
      </Col>
    </Row>
  )
}

export default EditMinerals
