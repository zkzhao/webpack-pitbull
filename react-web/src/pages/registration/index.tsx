import React from 'react'
import styles from './style.module.scss'
import logo from './images/logo-80.png'
import { Divider, Form, Input, Select, Button, Checkbox } from 'antd'
import { IDispatch } from '@/models/connect'
import { namespace } from '@/models/registration'
import { connect } from 'react-redux'
import VCodeButton from './vcode-btn'
import { useHistory } from 'react-router-dom'
import { LOGIN } from '@/router/config/login/path'
import { checkMobileValid } from '@/utils/validation-rule/name-exist'

interface IProps extends IDispatch {}
const FormItem = Form.Item
const RegistrationPage: React.FC<IProps> = ({ dispatch }) => {
  const history = useHistory()
  const [form] = Form.useForm()
  function onClick(callback: () => void, callbackFinally?: () => void) {
    const mobile = form.getFieldValue('loginName')
    form.validateFields(['loginName'])
    if (!mobile) {
      callbackFinally()
      return
    }
    dispatch({
      type: `${namespace}/getVCode`,
      payload: {
        mobile: mobile
      },
      callback,
      callbackFinally
    })
  }
  function redirectToLogin() {
    history.push(LOGIN)
  }
  function handleFinish(values) {
    dispatch({
      type: `${namespace}/createAccount`,
      payload: values
    })
  }
  const prefixSelecter = (
    <FormItem name="prefix" noStyle>
      <Select>
        <Select.Option value="86">中国 +86</Select.Option>
      </Select>
    </FormItem>
  )
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <p className={styles.logo}>
          <img src={logo} alt="logo" />
        </p>
        <p className={styles.title}>物必达经销商平台</p>
        <Divider />
        <Form form={form} onFinish={handleFinish} size="large" initialValues={{ prefix: '86' }}>
          <FormItem
            name="loginName"
            validateTrigger={['onChange', 'onBlur']}
            rules={[
              { required: true, message: '请输入手机号码' },
              { pattern: /^-?\d{1,11}$/, message: '请输入正确的手机号码' },
              checkMobileValid
            ]}
          >
            <Input addonBefore={prefixSelecter} placeholder="请输入手机号码" />
          </FormItem>
          <FormItem>
            <div className={styles.flexFormItem}>
              <FormItem noStyle name="verifyCode" rules={[{ required: true, len: 6, message: '请输入6位短信验证码' }]}>
                <Input style={{ width: 340 }} placeholder="请输入6位短信验证码" />
              </FormItem>
              <VCodeButton onClick={onClick} />
            </div>
          </FormItem>
          <FormItem name="password" hasFeedback rules={[{ required: true, min: 6, max: 20, message: '请输入6-20位密码' }]}>
            <Input.Password placeholder="请输入6-20位密码" />
          </FormItem>
          <FormItem
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请再次输入6-20位密码'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('两次输入的密码不一致')
                }
              })
            ]}
          >
            <Input.Password placeholder="请再次输入6-20位密码" />
          </FormItem>
          <FormItem>
            <Button className={styles.btnSubmit} size="large" type="primary" htmlType="submit">
              确定注册
            </Button>
          </FormItem>
          <FormItem>
            <div className={styles.flexFormItem}>
              <FormItem
                noStyle
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) => (value ? Promise.resolve() : Promise.reject('请阅读并同意用户使用协议'))
                  }
                ]}
              >
                <Checkbox>已阅读并同意</Checkbox>
              </FormItem>
              <Button className={styles.protocal} type="link">
                &lt;用户使用协议&gt;
              </Button>
              <Button type="link" className={styles.login} onClick={redirectToLogin}>
                已有账号，立即登录
              </Button>
            </div>
          </FormItem>
        </Form>
        <p className={styles.copyright}>©2020 重庆物必达网络科技有限公司</p>
      </div>
    </div>
  )
}

export default connect()(RegistrationPage)
