import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    sectionStyles: string
}

export const Section: React.FC<SectionProps> = ({ children, sectionStyles }) => {
    return(
        <section className={`${sectionStyles} my-[25px] mx-[50px] flex items-center justify-center`}>
            {children}
        </section>
    )
}