import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Text from '@/components/TextComponent'
import styles from './styles.module.scss'
import Link from "next/link";

export default function ChildrensTitles({ childrensData }) {

    return (
        <div>
            {
                <ul>
                    {childrensData.map((child, index) => {
                        return <li key={child.id || index}>
                            <details >
                                <summary>
                                    <Text as="h5" textColor="blue">
                                        <div className={styles.title}>
                                            {/* <FaMinus style={{ "width": "15px", "height": "15px" }}/> */ }
                                            {
                                                child.childrens.length > 0 ? <FaPlus style={{ width: "10px", height: "10px" }} /> :
                                                    <div style={{ width: "10px", height: "10px" }} />}
                                            {child.childrens.length > 0 ? child.name: <a>{child.name}</a>}
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

            {/* {
                <details >
                    <summary>
                        <Text as="h5" textColor="blue">
                            {dataFromChildrens && dataFromChildrens.name}
                        </Text>
                    </summary>
                    {
                        dataFromChildrens?.childrens?.length > 0 && < ChildrensTitles childrensData={dataFromChildrens.childrens} />
                    }

                </details>

            } */}

        </div>
    )
}
