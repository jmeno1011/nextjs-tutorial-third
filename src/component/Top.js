import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{ display: 'flex', paddingTop: 20 }}>
                <img src="/images/nextjs.png" alt="logo" style={{ display: 'block', width: 80 }} />
                <Header as="h1">메노</Header>
            </div>
            <Gnb />
        </div>)
}