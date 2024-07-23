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
                            <div className={styles.title}>
                                {child.childrens.length > 0 ? (
                                    !openDetails[child.id || index] ?
                                        <Text textColor={'blue'}>
                                            <FaPlus
                                                style={{ width: '10px', height: '10px', cursor: 'pointer' }}
                                                onClick={() => handleToggle(child.id || index)}
                                            />
                                        </Text> :
                                        <Text textColor={'blue'}>

                                            <FaMinus
                                                style={{ width: '10px', height: '10px', cursor: 'pointer' }}
                                                onClick={() => handleToggle(child.id || index)}
                                            />
                                        </Text>
                                ) : (
                                    <div style={{ width: '10px', height: '10px' }} />
                                )}
                                <span>
                                    <Text as="h5" textColor="blue">
                                        <Link href={""}>
                                            {child.name}
                                        </Link>
                                    </Text>
                                </span>
                            </div>
                            {openDetails[child.id || index] && (
                                <details open>
                                    <summary style={{ display: 'none' }}>Details</summary>
                                    <div>
                                        {child.childrens.length > 0 && (
                                            <ChildrensTitles childrensData={child.childrens} />
                                        )}
                                    </div>
                                </details>
                            )}
                        </li>

                    })}
                </ul>
            }

        </div>
    )
}
