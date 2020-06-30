import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { layout, tailLayout } from '@/utils/formStyle'
import * as REGEXP from '@/utils/regexp'
import { checkOldPwd } from '@/store/actions'
import './editPassword.less'
class EditPassword extends Component {
  render() {
    const { passwordReg } = REGEXP.REGEXP
    const { userName, id, checkOldPwd } = this.props
    // 修改密码方法
    const onFinish = (values) => {
      checkOldPwd(values)
    }
    return (
      <Card className='card' title='密码修改'>
        <Form name='basic' {...layout} onFinish={onFinish} initialValues={{ userName: userName, userId: id }}>
          <Form.Item name='userId' style={{ display: 'none' }}>
            <Input disabled />
          </Form.Item>
          <Form.Item label='用户名' name='userName'>
            <Input disabled />
          </Form.Item>
          <Form.Item label='原始密码' name='oldPwd' rules={[{ required: true, message: '请输入原始密码!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label='新密码'
            name='userToken'
            rules={[
              { required: true, message: '请输入新密码!' },
              { pattern: passwordReg, message: '安全性较低，6-16位，务必包含字符、数字、特殊符号！' }
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label='确认新密码'
            dependencies={['userToken']}
            name='confirmPwd'
            rules={[
              { required: true, message: '请输入确认新密码!' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('userToken') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('两次输入的密码不一致！')
                }
              })
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} className='btn-footer'>
            <Button type='primary' htmlType='submit'>
              确定
            </Button>
            <Button type='default'>
              <Link to='/dashboard'>取消</Link>
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default connect((state) => state.user, { checkOldPwd })(EditPassword)
