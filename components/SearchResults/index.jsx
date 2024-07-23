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
                <div className={styles.title}>
                  {item.childrens.length > 0 ? (
                    !openDetails[item.id || index] ?
                      <Text textColor={'blue'}>
                        <FaPlus
                          style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                          onClick={() => handleToggle(item.id || index)}
                        />
                      </Text> :
                      <Text textColor={'blue'}>

                        <FaMinus
                          style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                          onClick={() => handleToggle(item.id || index)}
                        />
                      </Text>
                  ) : (
                    <div style={{ width: '15px', height: '15px' }} />
                  )}
                  <span>
                    <Text as="h4" textColor="blue">
                      <Link href={''}>
                        {item.name}
                      </Link>

                    </Text>
                  </span>
                </div>
                {openDetails[item.id || index] && (
                  <details open>
                    <summary style={{ display: 'none' }}>Details</summary>
                    <div>
                      {item.childrens.length > 0 && (
                        <ChildrensTitles childrensData={item.childrens} />
                      )}
                    </div>
                  </details>
                )}
              </li>
            })}
          </ul>
        }



      </div>
    </>
  )
}
