import styles from './styles.module.scss'
import getData from '../jsonTest'
import { useState, useEffect } from 'react';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Text from '../TextComponent';
import ChildrensTitles from './ChildrensTitles';

export default function SearchResults() {
  const [titles, setTitles] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const getSubject = async () => {
    const res = await getData();
    // console.log(res);
    setTitles(res)
  }

  useEffect(() => {
    getSubject();
  }, [])

  return (
    <>
      <div className={styles.container}>

        {

          <ul>
            {titles.map((item, index) => {
              return <li key={item.id || index}>
                <details >
                  <summary>
                    <Text as="h4" textColor="blue">
                      <div className={styles.title}>
                        {/* <FaMinus style={{ "width": "15px", "height": "15px" }}/> */}
                        {
                          item.childrens.length > 0 ? <FaPlus style={{ width: "15px", height: "15px" }} /> :
                            <div style={{ width: "15px", height: "15px" }} />}
                        {item.name}
                      </div>
                    </Text>
                  </summary>
                  {
                    <div>
                      {
                        item?.childrens.length > 0 && <ChildrensTitles childrensData={item.childrens} />
                      }

                    </div>
                  }
                </details>
              </li>
            })}
          </ul>
        }



      </div>
    </>
  )
}