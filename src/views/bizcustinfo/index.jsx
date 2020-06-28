import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
import { connect } from 'react-redux'
import './bizcustinfo.less'

class Bizcustinfo extends Component {
  render() {
    console.log(this.props)
    return (
      <Card className='card' title='客户信息查询'>
        <Form autoComplete='off'>
          <Form.Item>
            <Input size='large' placeholder='请输入您的用户名' />
          </Form.Item>
        </Form>
      </Card>
    )
  }
}
export default connect((state) => state)(Bizcustinfo)
