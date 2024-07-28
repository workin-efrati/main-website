import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import styles from './styles.module.scss'
import Link from "next/link";
export const IconsPM = () => (<>
    <FaMinus className={styles.minus} />
    <FaPlus className={styles.plus} />
  </>)
export default function ChildrensTitles({ childrensData , margin = 10 }) {
    
    return (
        <div className={styles.container}>
                <ul>
                    {childrensData.map((child, index) => {
                        return <li key={child.id || index}>
                            <details >
                                <summary>
                                        <div className={styles.title} >
                                            <div style={{marginRight:`${margin}%`}}>

                                            {child.children.length  ?<IconsPM />:
                                                <div className={styles.placeHolderIcon} />}
                                            {
                                                <Link  href={child._id}>
                                                    {child.name}
                                                </Link>
                                            }
                                            </div>
                                        </div>
                                </summary>
                                    <div>
                                        {child?.children?.length > 0 &&
                                         <ChildrensTitles margin={margin+4} childrensData={child.children} />
                                        }
                                    </div>
                            </details>
                        </li>
                    })}
                </ul>
            

        </div>
    )
}