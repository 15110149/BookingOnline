import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
// import loaiphong from './loaiphong';
// import phong from './phong';
// import khachhang from './khachhang'
// import thietbi from './thietbi'
// import loaikhachhang from './loaikhachhang'
// import loaithietbi from './loaithietbi'
// import datphong from './datphong'
// import dichvu from './dichvu'

export default combineReducers({
    form: formReducer,
    //loaiphong,phong,khachhang, thietbi,loaikhachhang,loaithietbi, datphong, dichvu
})
