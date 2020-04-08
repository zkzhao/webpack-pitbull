import React, { useState } from 'react'
import styles from './style.module.scss'
import logo from './images/logo-login.png'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { IDispatch } from '@/models/connect'
import { namespace } from '@/models/login'
import { connect } from 'react-redux'

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
}

interface IProps extends IDispatch {}

const LoginPage: React.FC<IProps> = ({ dispatch }) => {
  const [loading, setLoading] = useState(false)
  function handleFinish(values) {
    setLoading(loading)
    dispatch({
      type: `${namespace}/loginRequest`,
      payload: values,
      callback: () => setLoading(false)
    })
  }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.formWrapper}>
          <p className={styles.title}>物必达经销商平台</p>
          <p className={styles.subTitle}>登录</p>
          <Form {...formItemLayout} size="large" className={styles.form} onFinish={handleFinish}>
            <Form.Item
              required={false}
              label={<span className={styles.label}>账号</span>}
              name="account"
              rules={[
                { required: true, message: '*请输入手机号码' },
                { pattern: /^-?\d+$/, message: '请输入正确的手机号码' }
              ]}
            >
              <Input placeholder="请输入账号" allowClear autoComplete="off" />
            </Form.Item>
            <Form.Item
              required={false}
              label={<span className={styles.label}>密码</span>}
              name="password"
              rules={[{ required: true, message: '*请输入密码' }]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button loading={loading} htmlType="submit" className={styles.btnSubmit} size="large" type="primary">
                登录
              </Button>
            </Form.Item>
          </Form>
          <p className={styles.regist}>
            <Link to="/registration">注册账号</Link>
          </p>
          <p className={styles.copyright}>©2020 重庆物必达网络科技有限公司</p>
        </div>
      </div>
    </div>
  )
}

export default connect()(LoginPage)
