import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import styles from './styles.module.scss'
import Link from "next/link";
export const IconsPM = () => (<>
    <FaMinus className={styles.minus} />
    <FaPlus className={styles.plus} />
  </>)
export default function ChildrensTitles({ childrensData }) {

    return (
        <div className={styles.container}>
                <ul>
                    {childrensData.map((child, index) => {
                        return <li key={child.id || index}>
                            <details >
                                <summary>
                                        <div className={styles.title}>
                                            {child.childrens.length > 0 ?<IconsPM />:
                                                <div className={styles.placeHolderIcon} />}
                                            {
                                                <Link href={''}>
                                                    {child.name}
                                                </Link>
                                            }
                                        </div>
                                </summary>
                                    <div>
                                        {child?.childrens?.length > 0 &&
                                         <ChildrensTitles childrensData={child.childrens} />
                                        }
                                    </div>
                            </details>
                        </li>
                    })}
                </ul>
            

        </div>
    )
}
