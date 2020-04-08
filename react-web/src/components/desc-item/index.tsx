import React from 'react'
import styles from './style.module.scss'

interface IProps {
  label: string
  labelWidth?: number
  style?: React.CSSProperties
}

/**
 * @param label 描述项的属性名
 * @param labelWidth 属性名宽度
 * @param align 垂直
 */
const DescItem: React.FC<IProps> = props => {
  const { label, style, labelWidth } = props
  return (
    <div style={style ? style : null} className={styles.descItemWrap}>
      <span style={labelWidth ? { width: `${labelWidth}px` } : null} className={styles.descItemLabel}>
        {label}
      </span>
      <div className={styles.descItemRight}>{props.children}</div>
    </div>
  )
}

export default DescItem
