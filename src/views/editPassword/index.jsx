import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
import { connect } from 'react-redux'
import { layout, tailLayout } from '@/utils/formStyle'
import * as REGEXP from '@/utils/regexp'
import { deleteTag } from '@/store/actions'
import { checkOldPwd } from '@/store/actions'
import './editPassword.less'
class EditPassword extends Component {
  render() {
    const { passwordReg } = REGEXP.REGEXP
    const { userName, id, checkOldPwd } = this.props.user
    // 修改密码方法
    const onFinish = (values) => {
      checkOldPwd(values)
    }
    // 关闭
    const handleClose = () => {
      const { taglist } = this.props.tagsView
      const { history, deleteTag } = this.props
      const tag = taglist.filter((item) => item.path === '/editPassowrd')
      const path = tag[0].path
      const currentPath = history.location.pathname
      const length = taglist.length
      // 如果关闭的是当前页，跳转到最后一个tag
      if (path === currentPath) {
        history.push(taglist[length - 1].path)
      }
      // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
      if (path === taglist[length - 1].path && currentPath === taglist[length - 1].path) {
        // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
        if (length - 2 > 0) {
          history.push(taglist[length - 2].path)
        } else if (length === 2) {
          history.push(taglist[0].path)
        }
      }
      deleteTag(tag[0])
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
            <Button type='default' onClick={handleClose}>取消</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default connect((state) => state, { checkOldPwd, deleteTag })(EditPassword)
