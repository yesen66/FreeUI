import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Input, { InputSize } from './components/Input/input';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
function App() {
  return (
    <div className="App">
      <Button className='yes'>hello</Button>
      <Button disabled> Disabled Button </Button>
      <Button autoFocus onClick={() => alert(1)} btnType={ButtonType.Primary} size={ButtonSize.Small} >hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' target="_blank">baidu</Button>
      <Button btnType={ButtonType.Link} href='http:www.baidu.com'>baidu</Button>
      <Input disabled={true} ></Input>

      <Menu defaultOpenSubMenus={['1']} mode="vertical">
        <MenuItem>
          link1
        </MenuItem>
        <MenuItem disabled>
          link2
        </MenuItem>
        <SubMenu title='副菜单'>
          <MenuItem>
            标题1
          </MenuItem>
          <MenuItem>
            标题2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          link3
        </MenuItem>
        {/* <li>2</li> */}
      </Menu>
      <Icon icon="arrow-down" theme="primary" size="10x" />
    </div>
  );
}
export default App;