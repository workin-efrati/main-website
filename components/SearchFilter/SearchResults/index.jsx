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
  console.log(titles);

  // const filterTitles = (res) => {
  //   const filteredTitles = [];
  //   res = res?.map(item => ({...item, parentOrder : [] }))
  //   const filterFunction = (arr, parentName) => {
  //     parentName ? arr.map(item => item.parentOrder = [item.name, ...parentName,])
  //       : arr?.map(item => item.parentOrder = [item.name])
  //     const tempArr = arr?.filter(item => item.name?.includes(valueSearch));
  //     filteredTitles.push(...tempArr)
  //     for (let i of arr) {
  //       i.children && filterFunction(i.children, i.parentOrder)
  //     }
  //   }
  //   filterFunction(res);
  //   return filteredTitles;
  // }

  // const filterTitles = (res, valueSearch) => {
  //   const filteredTitles = [];

  //   // Initialize res with parentOrder property
  //   res = res?.map(item => (typeof item === 'object' && (item !== null || item.name === item?.parentOrder?.[0]) ?

  //     { ...item, parentOrder: [] }
  //     : item));
  //   console.log(res);
  //   // Recursive function to filter and track parent names
  //   const filterFunction = (arr, parentName = []) => {
  //     arr.forEach(item => {
  //       if (typeof item === 'object' && item !== null) {
  //         // Set parentOrder for the current item
  //         item.parentOrder = [...parentName, item.name];

  //         // Check if the current item's name includes the search value
  //         if (item.name?.includes(valueSearch)) {
  //           filteredTitles.push(item);
  //         }

  //         // Recursively filter the children
  //         if (Array.isArray(item.children) && item.children.length > 0) {
  //           filterFunction(item.children, item.parentOrder);
  //         }
  //       }
  //     });
  //   }

  //   filterFunction(res);
  //   return filteredTitles;
  // }

  const filterTitles = (res) => {
    const filteredTitles = [];
    res = Array.isArray(res) ? res : [res];

    const filterFunction = (arr, parentName = []) => {
      arr.forEach(item => {
        if (typeof item === 'object' && item !== null) {
          item.parentOrder = [...parentName, item.name];

          if (item.name && item.name.includes(valueSearch)) {
            filteredTitles.push({ ...item, children: [] });
          }

          if (Array.isArray(item.children)) {
            filterFunction(item.children, item.parentOrder);
          }
        }
      });
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
            return <li key={item.id || index} className={valueSearch ? styles.searchResult : ''}>
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


