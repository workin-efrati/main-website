import styles from './styles.module.scss'
import getData from '../jsonTest'
import { useState, useEffect } from 'react';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Text from '../TextComponent';
import ChildrensTitles from './ChildrensTitles';
import Link from "next/link";

export default function SearchResults({ valueSearch }) {
  const [titles, setTitles] = useState([])
  const [openDetails, setOpenDetails] = useState({});

  const handleToggle = (id) => {
    setOpenDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  const getSubject = async () => {
    const res = await getData();
    if (valueSearch === '') {
      setTitles(res)
    }
    else {
      const filteredTitles = titles.filter(item => item.name.includes(valueSearch));
      setTitles(filteredTitles);
    }
  }

  useEffect(() => {
    getSubject();
  }, [valueSearch])

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

                        {
                          item.childrens.length > 0 ?
                            <>
                              <FaMinus className={styles.minus} style={{ "width": "15px", "height": "15px" }} />
                              <FaPlus className={styles.plus} style={{ width: "15px", height: "15px" }} />
                            </> :
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
