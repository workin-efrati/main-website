'use client'
import Text from "@/components/TextComponent";
import styles from "./page.module.scss";
import { Button } from "@/components/Button";

export default function Page() {

    const anyFunction = () => {
        console.log("This is a function click");
    }

    return (
        <Button onClick={anyFunction} >
            <Text as={'span'} textColor={'blue'} fontStyle={'b'}>שאלה אחרת</Text>
        </Button>
    );
}
