import styles from "./Chamado.module.css";
export default function Chamado({ chamado }) {
  return (
    <tr className={styles.row}>
      <td>{chamado.Número}</td>
      <td>{chamado.Categoria}</td>
      <td>{chamado.SolicitanteﾠTarefa}</td>
      <td>{chamado.EstadoﾠRelatório}</td>
      <td>{chamado.Aberto}</td>
    </tr>
  );
}
