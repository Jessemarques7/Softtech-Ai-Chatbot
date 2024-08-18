import Modal from "../Modal/Modal";
import styles from "./Chamado.module.scss";
export default function Chamado({ chamado }) {
  return (
    <Modal>
      <Modal.Open opens="chamado">
        <tr className={styles.row}>
          <td>{chamado.Número}</td>
          <td>{chamado.Categoria}</td>
          <td>{chamado.SolicitanteﾠTarefa}</td>
          <td>{chamado.EstadoﾠRelatório}</td>
          <td>{chamado.Aberto}</td>
        </tr>
      </Modal.Open>
      <Modal.Window name="chamado">
        <div>
          {Object.keys(chamado).map((chamadoIndex) => (
            <div key={chamadoIndex} className={styles.chamado}>
              <span>{chamadoIndex}:</span>
              <span>{chamado[chamadoIndex]}</span>
            </div>
          ))}
        </div>
      </Modal.Window>
    </Modal>
  );
}
