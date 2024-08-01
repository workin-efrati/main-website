import Link from "next/link";
import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import ChildrensTitles from './ChildrensTitles';
import styles from './styles.module.scss';
import useAxiosReq from '@/hooks/useAxiosReq'
import { MdLocalDining } from "react-icons/md";
import Loading from "./Loading";

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


export default function SearchResults({ valueSearch, data, loading }) {
  const [titles, setTitles] = useState([])

  const filterTitles = (res) => {
    const filteredTitles = [];
    res?.map(item => item.parentOrder = [])
    const filterFunction = (arr, parentName) => {
      parentName ? arr.map(item => item.parentOrder = [item.name, ...parentName,])
        : arr?.map(item => item.parentOrder = [item.name])
      const tempArr = arr?.filter(item => item.name?.includes(valueSearch));
      filteredTitles.push(...tempArr)
      for (let i of arr) {
        i.children && filterFunction(i.children, i.parentOrder)
      }
    }
    filterFunction(res);
    return filteredTitles;
  }

  const getTags = () => {
    const tags = data;
    if (valueSearch === '') {
      setTitles(tags)
    }
    else if (!loading) {
      const filteredTitles = filterTitles(tags)
      setTitles(filteredTitles);
    }
  }

  useEffect(() => {
    getTags();
  }, [data, valueSearch])



  return (
    <div className={styles.container}>
      {loading ? <Loading /> :
        <ul>
          {titles && titles.map((item, index) => {
            return <li key={item.id || index}>
              <details >

                <summary className={styles.title}>
                  {(item.children?.length > 0) ? <IconsPM /> : <div className={styles.placeHolderIcon} />}
                  <Link href={`/category/${item._id}`}>{item.name}</Link>
                  {item.parentOrder?.length > 1 && <Parent item={item} />}
                </summary>

                {
                  (item?.children?.length) > 0 &&
                  <ChildrensTitles childrensData={item.children} />
                }

              </details>
            </li>
          })}
        </ul>}
    </div>
  )
}


