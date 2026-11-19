import styles from './DateBadge.module.css';

interface DateBadgeProps {
  start: string;
  end?: string;
}

const DateBadge = ({ start, end }: DateBadgeProps) => {
  return (
    <div className={styles.badge}>
      <span className={styles.date}>{start}</span>
      {end && (
        <>
          <span className={styles.separator}>-</span>
          <span className={styles.date}>{end}</span>
        </>
      )}
    </div>
  );
};

export default DateBadge;
