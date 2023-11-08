import { FC, ReactNode } from "react"
import styles from './styles.module.scss'
import clsx from "clsx";

interface IProp {
    children: ReactNode
    className?: string;
}
export const Layout: FC<IProp> = ({ children, className }) => {
    return <div className={clsx(styles.container, className)}>
        {children}
    </div>
}