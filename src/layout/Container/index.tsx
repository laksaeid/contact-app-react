import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

const Container = ({children}: Props) => {
    return (
        <div className={"flex bg-slate-500 h-full flex-col sm:flex-row"}>
            {children}
        </div>
    );
};

export default Container;