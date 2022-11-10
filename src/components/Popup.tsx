import React from 'react'
import styles from 'styles/Popup.module.css'

type Props = {
  close: Function,
  children: React.ReactNode,
};

const Popup: React.FC<Props> = (props) => {
  const { children, close } = props

  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <div className={styles.closeWrapper}>
          <button
            className={styles.close}
            onClick={() => close()}
          />
        </div>
        {children}
      </div>
    </div>
  )
}
export default Popup
