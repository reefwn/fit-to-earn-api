export enum MessagesKey {
  /** exception case */
  EXCEPTION_CASE = 'EXCEPTION_CASE',
  INVALID_BODY = 'INVALID_BODY',
  INVALID_QUERY = 'INVALID_QUERY',
  INVALID_PARAM = 'INVALID_PARAM',
  DATA_NOT_FOUND = 'DATA_NOT_FOUND',
  UNAUTHORIZE = 'UNAUTHORIZE',
  /** success */
  SUCCESS = 'SUCCESS',
  OTP_SENT = 'OTP_SENT',
  CHECK_EMAIL = 'CHECK_EMAIL',
  EMAIL_IS_TAKEN = 'EMAIL_IS_TAKEN',
  COIN_NOT_ENOUGH = 'COIN_NOT_ENOUGH',
  STOCK_NOT_ENOUGH = 'STOCK_NOT_ENOUGH',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  EMAIL_SENT = 'EMAIL_SENT',
  EMAIL_VERIFY_SUCCESS = 'EMAIL_VERIFY_SUCCESS',
  /** login */
  EMAIL_IS_REQUIRED = 'EMAIL_IS_REQUIRED',
  INVALID_EMAIL = 'INVALID_EMAIL',
  PASSWORD_IS_REQUIRED = 'PASSWORD_IS_REQUIRED',
  INVALID_LOGIN = 'INVALID_LOGIN',
  /** register */
  EMPLOYEE_ID_NOT_FOUND = 'EMPLOYEE_ID_NOT_FOUND',
  INVALID_OTP = 'INVALID_OTP',
  ALREADY_REGISTERED = 'ALREADY_REGISTERED',
  /** forgot password */
  PASSWORD_NOT_MATCH = 'PASSWORD_NOT_MATCH',
  /** logout */
  LOGOUT = 'LOGOUT',
  /** activity */
  REACH_LIMIT_PARTICIPANT = 'REACH_LIMIT_PARTICIPANT',
  ALREADY_REGISTERED_ACTIVITY = 'ALREADY_REGISTERED_ACTIVITY',
  ACTIVITY_UNAVAILABLE = 'ACTIVITY_UNAVAILABLE',
  ACTIVITY_REQUIRED_PASSWORD = 'ACTIVITY_REQUIRED_PASSWORD',
  ACTIVITY_REQUIRED_LOCATION = 'ACTIVITY_REQUIRED_LOCATION',
  ACTIVITY_REQUIRED_QR_CODE = 'ACTIVITY_REQUIRED_QR_CODE',
  PASSWORD_INCORRECT = 'PASSWORD_INCORRECT',
  ACTIVITY_NO_NEED_REGISTER = 'ACTIVITY_NO_NEED_REGISTER',
  ALREADY_CHECKIN = 'ALREADY_CHECKIN',
  OUTSIDE_500_METER = 'OUTSIDE_500_METER',
  ACTIVITY_NEED_REGISTER = 'ACTIVITY_NEED_REGISTER',
  ACTIVITY_NEED_CHECKIN = 'ACTIVITY_NEED_CHECKIN',
  ACTIVITY_NOT_NEED_CHECKIN = 'ACTIVITY_NOT_NEED_CHECKIN',
  QR_CODE_INCORRECT = 'QR_CODE_INCORRECT',
  ALREADY_CHECKOUT = 'ALREADY_CHECKOUT',
  ACTIVITY_NOT_NEED_CHECKOUT = 'ACTIVITY_NOT_NEED_CHECKOUT',
  /** reward, redeem */
  REWARD_OUT_OF_STOCK = 'REWARD_OUT_OF_STOCK',
  USER_REDEEM_QUOTA_NOT_ENOUGH = 'USER_REDEEM_QUOTA_NOT_ENOUGH',
  /** donation */
  DONATION_UNAVAILABLE = 'DONATION_UNAVAILABLE',
  /** announcement */
  NO_ANNOUNCEMENT = 'NO_ANNOUNCEMENT',
}

interface Messages {
  /** exception case */
  EXCEPTION_CASE: string;
  INVALID_BODY: string;
  INVALID_QUERY: string;
  INVALID_PARAM: string;
  DATA_NOT_FOUND: string;
  UNAUTHORIZE: string;
  /** success */
  SUCCESS: string;
  OTP_SENT: string;
  CHECK_EMAIL: string;
  EMAIL_IS_TAKEN: string;
  COIN_NOT_ENOUGH: string;
  STOCK_NOT_ENOUGH: string;
  LOGIN_SUCCESS: string;
  EMAIL_SENT: string;
  EMAIL_VERIFY_SUCCESS: string;
  /** login */
  EMAIL_IS_REQUIRED: string;
  INVALID_EMAIL: string;
  PASSWORD_IS_REQUIRED: string;
  INVALID_LOGIN: string;
  /** register */
  EMPLOYEE_ID_NOT_FOUND: string;
  INVALID_OTP: string;
  ALREADY_REGISTERED: string;
  /** forgot password */
  PASSWORD_NOT_MATCH: string;
  /** logout */
  LOGOUT: string;
  /** activity */
  REACH_LIMIT_PARTICIPANT: string;
  ALREADY_REGISTERED_ACTIVITY: string;
  ACTIVITY_UNAVAILABLE: string;
  ACTIVITY_REQUIRED_PASSWORD: string;
  ACTIVITY_REQUIRED_LOCATION: string;
  ACTIVITY_REQUIRED_QR_CODE: string;
  PASSWORD_INCORRECT: string;
  ACTIVITY_NO_NEED_REGISTER: string;
  ALREADY_CHECKIN: string;
  OUTSIDE_500_METER: string;
  ACTIVITY_NEED_REGISTER: string;
  ACTIVITY_NEED_CHECKIN: string;
  ACTIVITY_NOT_NEED_CHECKIN: string;
  QR_CODE_INCORRECT: string;
  ALREADY_CHECKOUT: string;
  ACTIVITY_NOT_NEED_CHECKOUT: string;
  /** reward, redeem */
  REWARD_OUT_OF_STOCK: string;
  USER_REDEEM_QUOTA_NOT_ENOUGH: string;
  /** donation */
  DONATION_UNAVAILABLE: string;
  /** announcement */
  NO_ANNOUNCEMENT: string;
}

interface Message {
  [key: string]: Messages;
}

const MESSAGES: Message = {
  en: {
    /** exception case */
    EXCEPTION_CASE: 'Something went wrong. Please try again',
    INVALID_BODY: 'Invalid body request',
    INVALID_QUERY: 'Invalid query request',
    INVALID_PARAM: 'Invalid param request',
    DATA_NOT_FOUND: 'Data not found',
    UNAUTHORIZE: 'Unauthorization',
    /** success */
    SUCCESS: 'Success',
    OTP_SENT: 'OTP successfully sent.',
    CHECK_EMAIL: 'Please Check data in email.',
    EMAIL_IS_TAKEN: 'Already have this email',
    COIN_NOT_ENOUGH: 'Your coin not enough',
    STOCK_NOT_ENOUGH: 'Stock not enough',
    LOGIN_SUCCESS: "You've successfully logged in.",
    EMAIL_SENT: 'Your password recovery email was sent.',
    EMAIL_VERIFY_SUCCESS: 'Verify email success.',
    /** login */
    EMAIL_IS_REQUIRED: 'Please provide your email.',
    INVALID_EMAIL: 'Invalid email.',
    PASSWORD_IS_REQUIRED: 'Password field is required.',
    INVALID_LOGIN: 'Incorrect username or password.',
    /** register */
    EMPLOYEE_ID_NOT_FOUND: 'Employee ID not found.',
    INVALID_OTP: 'Invalid code',
    ALREADY_REGISTERED: 'Already have this employee id or email',
    /** forgot password */
    PASSWORD_NOT_MATCH: 'Password does not match',
    /** logout */
    LOGOUT: 'Logout.',
    /** activity */
    REACH_LIMIT_PARTICIPANT: 'This activity reach paticipant limit',
    ALREADY_REGISTERED_ACTIVITY: 'You already register this activity',
    ACTIVITY_UNAVAILABLE: 'This activity unavaliable',
    ACTIVITY_REQUIRED_PASSWORD: 'This activity requires password',
    ACTIVITY_REQUIRED_LOCATION:
      'This activity requires location, Please allow location in your device.',
    ACTIVITY_REQUIRED_QR_CODE: 'This activity requires Qr code',
    PASSWORD_INCORRECT: 'This password not correct',
    ACTIVITY_NO_NEED_REGISTER: 'This activity not need to register',
    ALREADY_CHECKIN: 'Already checkin',
    OUTSIDE_500_METER: 'Outside 500 meter radius',
    ACTIVITY_NEED_REGISTER: 'This activity need registration',
    ACTIVITY_NEED_CHECKIN: 'This activity need to checkin',
    ACTIVITY_NOT_NEED_CHECKIN: 'This activity not need to checkin',
    QR_CODE_INCORRECT: 'Qrcode not correct',
    ALREADY_CHECKOUT: 'Already checkout',
    ACTIVITY_NOT_NEED_CHECKOUT: 'This activity not need to checkout',
    /** reward, redeem */
    REWARD_OUT_OF_STOCK: 'Reward out of stock',
    USER_REDEEM_QUOTA_NOT_ENOUGH: 'Your redeem quota not enough',
    /** donation */
    DONATION_UNAVAILABLE: 'This donation unavaliable',
    /** announcement */
    NO_ANNOUNCEMENT: 'No announcement',
  },
  th: {
    /** exception case */
    EXCEPTION_CASE: 'เกิดข้อผิดพลาดบางอย่าง กรุณาทำรายการอีกครั้ง',
    INVALID_BODY: 'ข้อมูลไม่ถูกต้อง',
    INVALID_QUERY: 'ข้อมูลไม่ถูกต้อง',
    INVALID_PARAM: 'ข้อมูลไม่ถูกต้อง',
    DATA_NOT_FOUND: 'ไม่พบข้อมูล',
    UNAUTHORIZE: 'ไม่มีสิทธ์ในการเข้าถึง',
    /** success */
    SUCCESS: 'สำเร็จ',
    OTP_SENT: 'ดำเนินการส่งรหัส OTP เรียบร้อย',
    CHECK_EMAIL: 'กรุณาเช็คข้อมูลในอีเมล',
    EMAIL_IS_TAKEN: 'อีเมลนี้ถูกใช้ไปแล้ว',
    COIN_NOT_ENOUGH: 'เหรียญของคุณไม่เพียงพอ',
    STOCK_NOT_ENOUGH: 'สินค้าไม่เพียงพอ',
    LOGIN_SUCCESS: 'เข้าสู่ระบบ.',
    EMAIL_SENT: 'ส่งอีเมลสำเร็จ.',
    EMAIL_VERIFY_SUCCESS: 'ยินยันอีเมลสำเร็จ.',
    /** login */
    EMAIL_IS_REQUIRED: 'กรุณากรอกอีเมล',
    INVALID_EMAIL: 'กรุณากรอกอีเมลให้ถูกต้องตามรูปแบบ',
    PASSWORD_IS_REQUIRED: 'กรุณากรอกรหัสผ่าน',
    INVALID_LOGIN: 'ข้อมูลผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',
    /** register */
    EMPLOYEE_ID_NOT_FOUND: 'ไม่พบข้อมูลของรหัสพนักงาน',
    INVALID_OTP: 'รหัส OTP ไม่ถูกต้อง',
    ALREADY_REGISTERED: 'รหัสพนักงาน หรือ อีเมล ถูกใช้ไปแล้ว',
    /** forgot password */
    PASSWORD_NOT_MATCH: 'รหัสผ่านไม่ตรงกัน',
    /** logout */
    LOGOUT: 'ออกจากระบบสำเร็จ',
    /** activity */
    REACH_LIMIT_PARTICIPANT: 'กิจกรรมนี้มีผู้เข้าร่วมครบแล้ว',
    ALREADY_REGISTERED_ACTIVITY: 'คุณได้เข้าร่วมกิจกรรมนี้แล้ว',
    ACTIVITY_UNAVAILABLE: 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง',
    ACTIVITY_REQUIRED_PASSWORD: 'กรุณากรอกรหัสผ่าน',
    ACTIVITY_REQUIRED_LOCATION:
      'ไม่สามารถระบุตำแหน่งปัจจุบันได้ กรุณาให้สิทธิ์ในการเข้าถึงตำแหน่งที่อยู่',
    ACTIVITY_REQUIRED_QR_CODE: 'ต้องสแกน Qr code',
    PASSWORD_INCORRECT: 'รหัสผ่านไม่ถูกต้อง',
    ACTIVITY_NO_NEED_REGISTER: 'กิจกรรมนี้ไม่ต้องสมัคร',
    ALREADY_CHECKIN: 'คุณได้ทำการเช็คอินแล้ว',
    OUTSIDE_500_METER: 'คุณไม่ได้อยู่ในระยะ 500 เมตร ของกิจกรรมนี้',
    ACTIVITY_NEED_REGISTER: 'กิจกรรมนี้ต้องสมัครเข้าร่วม',
    ACTIVITY_NEED_CHECKIN: 'กิจกรรมนี้ต้องเช็คอิน',
    ACTIVITY_NOT_NEED_CHECKIN: 'กิจกรรมนี้ไม่ต้องเช็คอิน',
    QR_CODE_INCORRECT: 'Qrcode ไม่ถูกต้อง',
    ALREADY_CHECKOUT: 'คุณได้ทำการเช็คเอาท์แล้ว',
    ACTIVITY_NOT_NEED_CHECKOUT: 'กิจกรรมนี้ไม่ต้องเช็คเอ้าท์',
    /** reward, redeem */
    REWARD_OUT_OF_STOCK: 'ของรางวัลไม่เพียงพอ',
    USER_REDEEM_QUOTA_NOT_ENOUGH: 'โควต้าในการแลกของรางวัลของคุณไม่เพียงพอ',
    /** donation */
    DONATION_UNAVAILABLE: 'ไม่สามารถทำการบริจาคได้',
    /** announcement */
    NO_ANNOUNCEMENT: 'ไม่มีข่าวสาร',
  },
};

export const getMessage = (lang = 'en', msg: keyof Messages) => {
  return MESSAGES[lang][msg];
};
