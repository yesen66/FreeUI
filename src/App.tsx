import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Input from './components/Input/input';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';
import Alert, { AlertType } from './components/Alert/alert';
import { Upload } from './components/Upload/upload';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


function App() {
  // const lakes = [
  //   'bradley', 'pope', 'caruso', 'cook', 'cousins',
  //   'jams', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'
  // ]
  // const handleFetch = (query: string) => {
  //   return lakes.filter(name => name.includes(query))
  // }

  return (
    <div className="App">
      {/* <AutoComplete
        fetchSuggestions={handleFetch}
      /> */}
      <Button className='yes'>hello</Button>
      <Button disabled> Disabled Button </Button>
      <Button autoFocus onClick={() => alert(1)} btnType={ButtonType.Primary} size={ButtonSize.Small} >hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' target="_blank">baidu</Button>
      <Button btnType={ButtonType.Link} href='http:www.baidu.com'>baidu</Button>
      <Input disabled={true} ></Input>

      <Menu defaultIndex='0'>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem>
          cool link 2
        </MenuItem>
        <MenuItem disabled>
          disabled
        </MenuItem>
        <SubMenu title="下拉选项">
          <MenuItem>
            下拉选项一
          </MenuItem>
          <MenuItem>
            下拉选项二
          </MenuItem>
        </SubMenu>
      </Menu>
      <Upload
        action="https://jsonplaceholder.typicode.com/posts"
      />
      <Alert
        title='123'
        type={AlertType.Default}
        className='myAlert'
      />
      <Alert
        title='123'
        type={AlertType.Warning}
        className='myAlert'
      />
      <Alert
        title='123'
        type={AlertType.Success}
        className='myAlert'
        description='hah '
      />
      <Alert
        title='124'
        type={AlertType.Danger}
        description='我的'
        closable={true}
        onClose={() => { console.log(1) }}
      />
    </div>
  );
}
export default App;