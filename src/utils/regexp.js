// 常用正则表达式常量，整个项目的正则表达式请在此处统一维护
// 正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用一个字符串来描述、匹配一系列符合某个句法规则的字符串。
// 语法  /正则表达式主体/修饰符(可选)

export const REGEXP = {
  phoneReg: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, // 手机号的正则表达式
  idNumberReg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, // 身份证的正则表达式
  emailReg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, // email的正则表达式
  passwordReg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/, // 密码的正则表达式（6-18位字母数字组合）
  dateReg: /^\d{4}-\d{2}-\d{2}/, // 日期的正则表达式（2019-01-01）
  regionReg: /^[\u4e00-\u9fa5]+(,[\u4e00-\u9fa5]+){2}$/, // 地区的正则表达式
  telephoneReg: /([0-9]{3,4}-)?[0-9]{7,8}/,   //  电话号码正则验证
  telephoneReg2: /[0-9]{3,4}/,   //  电话号码正则验证
  telephoneReg3: /[0-9]{6,8}/,   //  电话号码正则验证
  english: /([a-zA-Z])$/, // 只能输入字母
};