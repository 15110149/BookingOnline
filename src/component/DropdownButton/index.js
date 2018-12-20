import {
  Menu, Dropdown, Icon, message,
  } from 'antd';
  import 'antd/dist/antd.css';
  import React, { PureComponent } from 'react';
  import { change } from 'redux-form';
  
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">Phòng Đơn</Menu.Item>
      <Menu.Item key="2">Phòng Đôi</Menu.Item>
      <Menu.Item key="3">Phòng Vip</Menu.Item>
    </Menu>
  );
  
  
  
  class DropdownButton extends PureComponent<Props> {
   
  
    render() {
  
   
      return (
        <Dropdown overlay={menu}>
        <button className="ant-dropdown-link" href="#" style={{backgroundColor : 'rgb(243, 181, 9)', color:'white', borderRadius:'10px' }}>
          Loại Phòng <Icon type="down" />
        </button>
        </Dropdown>
      );
    }
  };
  
  export default DropdownButton;
  
  
  






