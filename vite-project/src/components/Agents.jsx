import styles from './Agents.module.css';

export function Agents({ agents }) {
  return (
    <div className={styles.agentsContainer}>
      <div className={styles.agentsContent}>
        {agents.map((agent, index) => (
          <img
            key={agent.id}
            className={`${styles[`position${index + 1}`]}`}
            src={agent.image}
            alt={`${agent.name}`}
          />
        ))}
      </div>
    </div>
  );
}
