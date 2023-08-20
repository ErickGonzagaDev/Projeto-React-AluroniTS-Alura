import { SetStateAction, useState } from "react"
import styles from "./Ordenador.module.scss"
import opcoes from "./opcoes.json"
import classNames from "classnames"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

interface OrdenadorProps {
    ordenador: string,
    setOrdenador: React.Dispatch<SetStateAction<string>>
}

const Ordenador = ({ ordenador, setOrdenador }: OrdenadorProps) => {

    const [aberto, setAberto] = useState(false)
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome
    return (
        <button className={classNames({
            [styles.ordenador]: true,
            [styles["ordenador--ativo"]]: ordenador !== ""
        })}
            onBlur={() => setAberto(false)}
            onClick={() => setAberto(!aberto)}>
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto,

            })}>
                {opcoes.map((opcao) => (
                    <div
                        className={styles.ordenador__option}
                        key={opcao.value}
                        onClick={() => setOrdenador(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Ordenador