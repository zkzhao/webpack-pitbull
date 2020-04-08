import React from 'react'
import styles from './style.module.scss'

export const ListLayout: React.FC = ({ children }) => <div className={styles.listContainer}>{children}</div>

export const ActionHeader: React.FC = ({ children }) => <div className={styles.actionHeader}>{children}</div>

export const Content: React.FC = ({ children }) => <div className={styles.content}>{children}</div>
