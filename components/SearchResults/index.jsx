import Link from "next/link";
import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import getData from '../jsonTest';
import ChildrensTitles from './ChildrensTitles';
import styles from './styles.module.scss';
import  useAxiosReq  from '@/hooks/useAxiosReq'

export const IconsPM = () => (<>
  <FaMinus className={styles.minus} />
  <FaPlus className={styles.plus} />
</>)

const Parent = ({ item }) => (<div className={styles.parents} >
  {'('}
  {item.parentOrder?.slice(1)?.map((item, index, array) =>
    <>{item} {(index < array.length - 1) && <span> {' >'} </span>}                            </>
  )}
  {')'}
</div>)


export default function SearchResults({ valueSearch }) {
  const { data, loading, error } = useAxiosReq({ url:  'api/category' })

  const [titles, setTitles] = useState([])

  const filterTitles = (res) => {
    const filteredTitles = [];
    res.map(item => item.parentOrder = [])
    const filterFunction = (arr, parentName) => {
      parentName ? arr.map(item => item.parentOrder = [item.name, ...parentName,])
        : arr.map(item => item.parentOrder = [item.name])
      const tempArr = arr.filter(item => item.name?.includes(valueSearch));
      filteredTitles.push(...tempArr)
      for (let i of arr) {
        i.childrens && filterFunction(i.childrens, i.parentOrder)
      }
    }
    filterFunction(res);
    return filteredTitles;
  }

  const getTags = async () => {
    const tags = data;
    const res = await getData();
    if (valueSearch === '') {
      setTitles(res)
    }
    else {
      const filteredTitles = filterTitles(res)

      setTitles(filteredTitles);
    }
  }

  useEffect(() => {
    getTags();
  }, [valueSearch])



  return (
    <div className={styles.container}>
      <ul>
        {titles.map((item, index) => {
          return <li key={item.id || index}>
            <details >

              <summary className={styles.title}>
                {(item.childrens.length > 0) ?
                  <IconsPM /> :
                  <div className={styles.placeHolderIcon} />}

                <Link href={''}>{item.name}</Link>
                {item.parentOrder?.length > 1 && <Parent item={item} />}
              </summary>

              {
                (item?.childrens.length) > 0 &&
                <ChildrensTitles childrensData={item.childrens} />
              }

            </details>
          </li>
        })}
      </ul>
    </div>
  )
}


