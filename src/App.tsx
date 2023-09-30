import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Input from './components/Input/input';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem'
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
      <Input></Input>

      <Menu defaultIndex={0} >
        <MenuItem index={1}>
          cool link
        </MenuItem>
        <MenuItem index={2} disabled={true}>
          cool link 2
        </MenuItem>
        <MenuItem index={3}>
          cool link 3
        </MenuItem>
      </Menu>
      <Icon icon="arrow-down" theme="primary" size="10x" />
    </div>
  );
}
export default App;