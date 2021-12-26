/**
 * 定义的一些常用的正则表达式
 * @static {RegExp} isPhone - 校验是不是手机号的正则
 * @static {RegExp} isEmail - 校验是不是邮箱的正则
 * @static {RegExp} isIDCard - 校验是不是身份证号的正则
 * @static {RegExp} isURL - 校验是不是URL的正则
 * @static {RegExp} isQQ - 校验是不是QQ号的正则
 * @static {RegExp} isWX - 校验是不是微信号的正则
 * @static {RegExp} isNumberPlate - 校验是不是车牌号的正则
 * @static {RegExp} isTelWithArea - 校验带区域的电话号码的正则
 * @static {RegExp} isTel - 校验不带区域的电话号码的正则
 * @static {RegExp} isEmptyStr - 校验输入字符串是否全部都是空格的正则
 * @static {RegExp} isNumber - 校验输入字符串是否全部都是正数字的正则
 * @static {RegExp} isDecimal - 校验输入字符串是否是带小数的数字的正则
 */
class RegUtils {
    /**
     * 校验是不是手机号的正则
     */
    static isPhone() {
        return /^(13[0-9]{1}|14[5|7|9]{1}|15[0-3|5-9]{1}|166|17[0-3|5-8]{1}|18[0-9]{1}|19[8-9]{1}){1}\d{8}$/
    }

    /**
     * 校验是不是邮箱的正则
     */
    static isEmail() {
        return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    }

    /**
     * 校验是不是身份证号的正则
     */
    static isIDCard() {
        return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    }

    /**
     * 校验是不是URL的正则
     */
    static isURL() {
        return /^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    }

    /**
     * 校验是不是QQ号的正则
     */
    static isQQ() {
        return /^[1-9][0-9]{4,10}$/
    }

    /**
     * 校验是不是微信号的正则
     */
    static isWX() {
        return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
    }

    /**
     * 校验是不是车牌号的正则
     */
    static isNumberPlate() {
        return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
    }

    /**
     * 校验带区域的电话号码的正则
     */
    static isTelWithArea() {
        return /^[0][1-9]{2,3}-[0-9]{5,10}$/
    }

    /**
     * 校验不带区域的电话号码的正则
     */
    static isTel() {
        return /^[1-9]{1}[0-9]{5,8}$/
    }

    /**
     * 校验输入字符串是否全部都是空格的正则
     */
    static isEmptyStr() {
        return /^[ ]+$/
    }

    /**
     * 校验输入字符串是否全部都是正数字的正则
     */
    static isNumber() {
        return /^[0-9]+$/
    }

    /**
     * 校验输入字符串是否是带小数的数字的正则
     */
    static isDecimal() {
        return /^[-]{0,1}(\d+)[.]+(\d+)$/
    }
}

export default RegUtils
