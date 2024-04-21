import { useTranslation } from "react-i18next";     // i18next

const Footer = () => {
    const { t } = useTranslation();     // Translation hook

    const date = new Date;
    const year = date.getFullYear();

    return (
        <footer className="w-full h-12 bg-green-50 flex justify-center items-center dark:bg-zinc-400">
            <p className="text-lg lg:text-xl font-medium"><a href="https://www.linkedin.com/in/matheus-pombeiro/" target="_blank" rel="noreferrer noopener" className="hover:underline">Matheus Pombeiro</a> | {year}</p>
        </footer>
    )
};

export default Footer;