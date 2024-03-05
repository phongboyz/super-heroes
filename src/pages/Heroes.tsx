import { FC } from "react";
import { HeroesList } from "../components/HeroesList";
import { webTitleHook } from "../hooks/webTitleHook";
 
const Heroes: FC = () => {

    webTitleHook('Heroes');

    return <HeroesList />
}

export default Heroes