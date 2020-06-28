import React from 'react'
import { connect } from 'react-redux'
import './myUser.less'
const MyUser = (props) => {
    // const {} = props
    // console.log(props)
    return (
        <div>
            这里是用户信息
        </div>
    )
}

export default connect((state) => state.user)(MyUser)