import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import styles from './style.module.scss'
import { connect } from 'react-redux'

interface IProps {
  onClick: (callback: () => void, callbackFinally?: () => void) => void
}

const VCodeBtn: React.FC<IProps> = ({ onClick }) => {
  const [countdown, setCountdown] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isSend, setIsSend] = useState(false)
  function callback() {
    setCountdown(60)
    // setLoading(false)
    setIsSend(true)
  }
  useEffect(() => {
    let timer
    if (isSend && countdown !== 0) {
      timer = setInterval(() => {
        setCountdown(count => {
          if (count === 1) {
            setIsSend(false)
            clearInterval(timer)
          }
          return count - 1
        })
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSend])
  function handleClick() {
    setLoading(true)
    onClick(callback, () => setLoading(false))
  }
  return (
    <Button loading={loading} disabled={countdown > 0} onClick={handleClick} className={styles.vcode} type="link">
      {countdown > 0 ? `${countdown}秒后重新发送` : '获取短信验证码'}
    </Button>
  )
}

export default connect()(VCodeBtn)
