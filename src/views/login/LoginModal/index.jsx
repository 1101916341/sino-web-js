import { Modal } from 'antd';
import '../login.less'
const { confirm } = Modal;

function LoginModal() {
    return (
        confirm({
            className: 'login-modal',
            centered: true,
            title: '提示',
            content: '重置密码需发送邮件给运管项目经理陈景硕（chenjingshuo@sinodata.net.cn），并抄送给您的直属上级领导。',
            okText: '确定',
            cancelText: ' ',
            onOk() { }
        })
    );
}

export default LoginModal;