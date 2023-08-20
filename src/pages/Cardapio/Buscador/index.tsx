import styles from "./Buscador.module.scss"
import {CgSearch} from "react-icons/cg"

interface BuscadorProps {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca }: BuscadorProps) => {
    return (
        <div className={styles.buscador}>
            <input type="text" 
            value={busca}
            onChange={(evento)=> setBusca(evento.target.value)}
            placeholder="Buscar"
            />
            <CgSearch size={20} color="#4c4d5e"/>
        </div>
    )
}
export default Buscador