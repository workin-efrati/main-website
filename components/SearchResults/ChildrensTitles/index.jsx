import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Text from '@/components/TextComponent'
import styles from './styles.module.scss'
import Link from "next/link";

export default function ChildrensTitles({ childrensData }) {
    const [openDetails, setOpenDetails] = useState({});

    const handleToggle = (id) => {
        setOpenDetails((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <div className={styles.container}>
            {
                <ul>
                    {childrensData.map((child, index) => {
                        return <li key={child.id || index}>
                            <details >
                                <summary>
                                    <Text as="h5" textColor="blue">
                                        <div className={styles.title}>

                                            {child.childrens.length > 0 ?
                                                <>
                                                    <FaMinus className={styles.minus} style={{ "width": "10px", "height": "10px" }} />
                                                    <FaPlus className={styles.plus} style={{ width: "10px", height: "10px" }} />
                                                </> :
                                                <div style={{ width: "10px", height: "10px" }} />}
                                            {child.childrens.length > 0 ? child.name : <a>{child.name}</a>}
                                        </div>
                                    </Text>
                                </summary>
                                {
                                    <div>
                                        {
                                            child?.childrens.length > 0 && <ChildrensTitles childrensData={child.childrens} />
                                        }

                                    </div>
                                }
                            </details>
                        </li>
                    })}
                </ul>
            }

        </div>
    )
}
