import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { ThemeProvider, injectGlobal } from 'styled-components'
import Button from './../src/components/button/button'
import Card from './../src/components/card/card'
import Dropdown from './../src/components/dropdown/dropdown-selection'
import { Checkbox, Input, InputFile, InputSelect, MultipleFile, Radiobox } from './../src/components/input'
import Layout, { Burger, Content, Footer, Header, Menu, Sider } from './../src/components/layout'
import { Modal, ModalContent, ModalFooter } from './../src/components/modal'
import Progress from './../src/components/progress/progress'
import Sidebar from './../src/components/sidebar/sidebar'
import Tab from './../src/components/tab/tab'
import Table from './../src/components/table/table'
import { Toastr, ToastrContainer } from './../src/components/toastr'
import TimePicker from './../src/components/timepicker/time-input'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender, ClearFix } from './../src/components/grid/grid'
import Link from './../src/components/link/link'
import Welcome from './Welcome'

import { darkTheme } from './../src/const/theme'
import toastrContent from './../src/const/toastrContent'
import DropDownContent from './../src/const/dropdownContent'
import './../node_modules/simple-line-icons/css/simple-line-icons.css'
import CloudLightOTF from '../src/fonts/Cloud-Light.otf'
import CloudBoldOTF from '../src/fonts/Cloud-Bold.otf'
import CSPraJadOTF from '../src/fonts/CSPraJad.otf'

injectGlobal`
  @font-face {
    font-family: 'CloudLight';
    src: url(${CloudLightOTF}) format('opentype');
  }
  @font-face {
    font-family: 'CloudBold';
    src: url(${CloudBoldOTF}) format('opentype');
  }
  @font-face {
    font-family: 'Prajard';
    src: url(${CSPraJadOTF}) format('opentype');
  }
  
  body {
    font-family: 'CloudLight';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
  }

  h1 {
    margin: 0;
    font-size: 34px;
  }
  h2 {
    margin: 0;
    font-size: 28px;
  }
  h3 {
    margin: 0;
    font-size: 22px;
    line-height: 0.9;
  }
`

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ))

storiesOf('Layout', module)
  .add('Basic Layout', () => (
    <Layout>
      <Menu />
      <Footer> Footer </Footer>
    </Layout>
  ))

storiesOf('Side Bar', module)
  .add('default Side Bar', () => (
    <Sidebar />
  ))
  .add('Dark theme Side Bar', () => (
    <ThemeProvider theme={darkTheme}>
      <Sidebar />
    </ThemeProvider>
  ))

storiesOf('Button', module)
  .add('Basic Button', () => (
    <Button>Hello world</Button>
  ))
  .add('in small size', () => (
    <Button small>Hello world</Button>
  ))
  .add('in large size', () => (
    <Button large>Hello world</Button>
  ))
  .add('in dark color', () => (
    <Button color="dark">Hello world</Button>
  ))
  .add('in gray color', () => (
    <Button color="gray" onClick={action('clicked')}>Hello world</Button>
  ))
  .add('in round corner', () => (
    <Button type="sideRound" onClick={action('clicked')}>Hello world</Button>
  ))
  .add('in outline style', () => (
    <Button buttonStyle="outline" onClick={action('clicked')}>Hello world</Button>
  ))
  .add('with icon on left', () => (
    <Button iconName="icon-fire" onClick={action('clicked')}>Hello world</Button>
  ))
  .add('with icon on right', () => (
    <Button iconName="icon-fire" iconRight onClick={action('clicked')}>Hello world</Button>
  ))
  .add('in circle icon', () => (
    <Button onlyIcon type="circleIcon" iconName="icon-fire" onClick={action('clicked')}>t</Button>
  ))
  .add('in square icon', () => (
    <Button onlyIcon type="squareIcon" color="dark" buttonStyle="outline" iconName="icon-bell" onClick={action('clicked')}>t</Button>
  ))
  .add('Disabled Button', () => (
    <Button disabled onClick={action('clicked')}>Hello world</Button>
  ))

storiesOf('Card', module)
  .add('default card', () => (
    <Card>จำนวนยูสเซอร์ทั้งหมด</Card>
  ))
  .add('dark theme card', () => (
    <ThemeProvider theme={darkTheme}>
      <Card>จำนวนยูสเซอร์ทั้งหมด</Card>
    </ThemeProvider>
  ))

storiesOf('Modal', module)
  .add('default modal', () => (
    <Modal show title="เคลื่อนย้าย เทควันโด">
      <ModalContent>
        เวเฟอร์ แอ็คชั่นพลาซ่าวานิลลาแทกติค แจ๊กเก็ตซูฮก
        เธคจิ๊กโก๋ เอ๋อีสต์ลอร์ดนายแบบราเมน เฮียเพียบแปร้โปรเจกต์ครูเสดวิว
        เกรย์บูติก จิ๊กซอว์ รัมอีแต๋นเยอบีราโมจิ เอ็กซ์เพรสเพียบแปร้
        ร็อคแมนชั่นซาฟารี รีวิวเจลดราม่า
      </ModalContent>
      <ModalFooter right>
        <Button onClick={action('clicked')}>ตกลง</Button>
        <Button buttonStyle="outline" onClick={action('clicked')}>ยกเลิก</Button>
      </ModalFooter>
    </Modal>
  ))
  .add('dark theme modal', () => (
    <ThemeProvider theme={darkTheme}>
      <Modal show title="เคลื่อนย้าย เทควันโด">
        <ModalContent>
          เวเฟอร์ แอ็คชั่นพลาซ่าวานิลลาแทกติค แจ๊กเก็ตซูฮก
          เธคจิ๊กโก๋ เอ๋อีสต์ลอร์ดนายแบบราเมน เฮียเพียบแปร้โปรเจกต์ครูเสดวิว
          เกรย์บูติก จิ๊กซอว์ รัมอีแต๋นเยอบีราโมจิ เอ็กซ์เพรสเพียบแปร้
          ร็อคแมนชั่นซาฟารี รีวิวเจลดราม่า
        </ModalContent>
        <ModalFooter left>
          <Button onClick={action('clicked')}>ตกลง</Button>
          <Button buttonStyle="outline" onClick={action('clicked')}>ยกเลิก</Button>
        </ModalFooter>
      </Modal>
    </ThemeProvider>
  ))
storiesOf('Input', module)
  .add('default input', () => (
    <div>
      <div>
        <p>Normal Size</p>
        <Input />
      </div>
      <div>
        <p>Large Size</p>
        <Input large />
      </div>
      <div>
        <p>Small Size</p>
        <Input small />
      </div>
    </div>
  ))
  .add('dark theme default input', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '10px 20px' }}>
        <div>
          <div>
            <p style={{ color: '#FFFFFF' }}>Normal Size</p>
            <Input />
          </div>
          <div>
            <p style={{ color: '#FFFFFF' }}>Large Size</p>
            <Input large />
          </div>
          <div>
            <p style={{ color: '#FFFFFF' }}>Small Size</p>
            <Input small />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ))
  .add('default disabled input', () => (
    <Input disabled defaultValue="default value" />
  ))
  .add('dark theme disabled input', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px' }}>
        <Input defaultValue="skinnykidz" disabled />
      </div>
    </ThemeProvider>
  ))
  .add('default default input with value', () => (
    <Input defaultValue="skinnykidz" />
  ))
  .add('dark theme default input with value', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px' }}>
        <Input defaultValue="skinnykidz" />
      </div>
    </ThemeProvider>
  ))
  .add('default input with error state', () => (
    <Input defaultValue="skinnykidz" error />
  ))
  .add('dark theme input with error state and error message', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px' }}>
        <Input defaultValue="skinnykidz" error errorMsg="Email wrong" />
      </div>
    </ThemeProvider>
  ))
  .add('default input with success state', () => (
    <Input defaultValue="skinnykidz" success />
  ))
  .add('dark theme input with success state', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px' }}>
        <Input defaultValue="skinnykidz" success />
      </div>
    </ThemeProvider>
  ))

storiesOf('Input File', module)
  .add('default input file', () => (
    <InputFile id="test" />
  ))
  .add('dark theme default input file', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px' }}>
        <InputFile id="test1" />
      </div>
    </ThemeProvider>
  ))
  .add('default multi file', () => (
    <MultipleFile />
  ))
  .add('dark theme multi file', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px' }}>
        <MultipleFile />
      </div>
    </ThemeProvider>
  ))

storiesOf('Check box', module)
  .add('default checkbox', () => (
    <div>
      <div>
        <p>Normal Size</p>
        <Checkbox id="checkbox" title="Title" />
      </div>
      <div>
        <p>Large Size</p>
        <Checkbox id="checkboxLarge" title="Title" large />
      </div>
      <div>
        <p>Small Size</p>
        <Checkbox id="checkboxSmall" title="Title" small />
      </div>
    </div>
  ))
  .add('dark theme checkbox', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
        <div>
          <p>Normal Size</p>
          <Checkbox id="checkbox" title="Title" />
        </div>
        <div>
          <p>Large Size</p>
          <Checkbox id="checkboxLarge" large title="Title" />
        </div>
        <div>
          <p>Small Size</p>
          <Checkbox id="checkboxSmall" small title="Title" />
        </div>
      </div>
    </ThemeProvider>
  ))

storiesOf('Radio box', module)
  .add('default radiobox', () => (
    <div>
      <div>
        <p>Normal Size</p>
        <Radiobox id="checkbox" name="radio" title="Title" />
      </div>
      <div>
        <p>Large Size</p>
        <Radiobox id="checkboxLarge" large name="radio" title="Title" />
      </div>
      <div>
        <p>Small Size</p>
        <Radiobox id="checkboxSmall" small name="radio" title="Title" />
      </div>
    </div>
  ))
  .add('dark theme radiobox', () => (
    <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
      <div>
        <p>Normal Size</p>
        <Radiobox id="checkbox" name="radio" title="Title" />
      </div>
      <div>
        <p>Large Size</p>
        <Radiobox id="checkboxLarge" large name="radio" title="Title" />
      </div>
      <div>
        <p>Small Size</p>
        <Radiobox id="checkboxSmall" small name="radio" title="Title" />
      </div>
    </div>
  ))
storiesOf('Dropdown', module)
  .add('default dropdown selection', () => (
    <div>
      <div>
        <p>Normal Size</p>
        <Dropdown selectedText="" itemClassName={'test'} placeholder="Select placeholder" content={DropDownContent} />
      </div>
      <div>
        <p>Large Size</p>
        <Dropdown large selectedText="" placeholder="Select placeholder" content={DropDownContent} />
      </div>
      <div>
        <p>Small Size</p>
        <Dropdown small selectedText="" placeholder="Select placeholder" content={DropDownContent} />
      </div>
    </div>
  ))
  .add('dark theme dropdown selection', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
        <div>
          <p>Normal Size</p>
          <Dropdown selectedText="" placeholder="Select placeholder" content={DropDownContent} />
        </div>
        <div>
          <p>Large Size</p>
          <Dropdown large selectedText="" placeholder="Select placeholder" content={DropDownContent} />
        </div>
        <div>
          <p>Small Size</p>
          <Dropdown small selectedText="" placeholder="Select placeholder" content={DropDownContent} />
        </div>
      </div>
    </ThemeProvider>
  ))

storiesOf('Select', module)
  .add('default select - one', () => (
    <InputSelect name="select" />
  ))
  .add('Dark theme select - one', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF', height: '300px' }}>
        <InputSelect name="select1" />
      </div>
    </ThemeProvider>
  ))
  .add('default select - multi', () => (
    <InputSelect multi name="select2" />
  ))
  .add('Dark theme select - multi', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF', height: '300px' }}>
        <InputSelect multi name="select3" />
      </div>
    </ThemeProvider>
  ))
  .add('default select async - one', () => (
    <InputSelect async name="select4" />
  ))
  .add('Dark theme select async - one', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF', height: '300px' }}>
        <InputSelect async name="select5" />
      </div>
    </ThemeProvider>
  ))
  .add('default select async - multi', () => (
    <InputSelect async multi name="select5" />
  ))
  .add('Dark theme select async - multi', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF', height: '300px' }}>
        <InputSelect async multi name="select6" />
      </div>
    </ThemeProvider>
  ))
  .add('default select creatable - one', () => (
    <InputSelect creatable name="select7" />
  ))
  .add('Dark theme select creatable - one', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF', height: '300px' }}>
        <InputSelect creatable name="select8" />
      </div>
    </ThemeProvider>
  ))
  .add('default select creatable - multi', () => (
    <InputSelect creatable multi name="select9" />
  ))
  .add('Dark theme select creatable - multi', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF', height: '300px' }}>
        <InputSelect creatable multi name="select10" />
      </div>
    </ThemeProvider>
  ))
storiesOf('Table', module)
  .add('default table', () => (
    <Table />
  ))
  .add('dark theme table', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
        <Table />
      </div>
    </ThemeProvider>
  ))
storiesOf('Tab', module)
  .add('default tab', () => (
    <Tab>
      <div>Tab 1 Content</div>
      <div>Tab 2 Content</div>
      <div>Tab 3 Content</div>
    </Tab>
  ))
  .add('dark theme tab', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
        <Tab>
          <div>Tab 1 Content</div>
          <div>Tab 2 Content</div>
          <div>Tab 3 Content</div>
        </Tab>
      </div>
    </ThemeProvider>
  ))

storiesOf('Progress', module)
  .add('Normal Progress', () => (
    <div>
      <Progress valueNow="25%" />
      <Progress valueNow="50%" />
      <Progress valueNow="75%" />
      <Progress valueNow="100%" />
      <Progress animated valueNow="53%" />
    </div>
  ))
  .add('Large Progress', () => (
    <div>
      <Progress large valueNow="25%" />
      <Progress large valueNow="50%" />
      <Progress large valueNow="75%" />
      <Progress large valueNow="100%" />
      <Progress animated large valueNow="53%" />
    </div>
  ))
  .add('Small Progress', () => (
    <div>
      <Progress small valueNow="25%" />
      <Progress small valueNow="50%" />
      <Progress small valueNow="75%" />
      <Progress small valueNow="100%" />
      <Progress animated small valueNow="53%" />
    </div>
  ))

storiesOf('Toastr', module)
  .add('default color without themeProvider', () => (
    <div>
      <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
      <ToastrContainer show>
        {
          toastrContent.reverse().map(data => (
            <Toastr
              key={data.title}
              type={data.type}
              title={data.title}
              message={data.message}
            />
          ))
        }
      </ToastrContainer>
    </div>
  ))
  .add('white theme toastr default position topRight', () => (
    <ThemeProvider theme={darkTheme}>
      <div>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
      แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
      จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
      มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

      แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
      คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
      ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
      เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
        <ToastrContainer show>
          {
            toastrContent.reverse().map(data => (
              <Toastr
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))
  .add('dark theme toastr position topLeft', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
        <ToastrContainer show position="topLeft">
          {
            toastrContent.reverse().map(data => (
              <Toastr
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))
  .add('white theme toastr with auto hide and position topCenter', () => (
    <ThemeProvider theme={darkTheme}>
      <div>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
        <ToastrContainer show position="topCenter">
          {
            toastrContent.reverse().map(data => (
              <Toastr
                autoHide
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))
  .add('dark theme toastr with auto hide and position topFull', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
        <ToastrContainer show position="topFull">
          {
            toastrContent.reverse().map(data => (
              <Toastr
                autoHide
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))
  .add('white theme toastr default position bottomRight', () => (
    <ThemeProvider theme={darkTheme}>
      <div>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
        <ToastrContainer show position="bottomRight">
          {
            toastrContent.reverse().map(data => (
              <Toastr
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))
  .add('white theme toastr default position bottomLeft', () => (
    <ThemeProvider theme={darkTheme}>
      <div>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
        <ToastrContainer show position="bottomLeft">
          {
            toastrContent.reverse().map(data => (
              <Toastr
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))
  .add('white theme toastr default position bottomCenter', () => (
    <ThemeProvider theme={darkTheme}>
      <div>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์</p>
        <ToastrContainer show position="bottomCenter">
          {
            toastrContent.reverse().map(data => (
              <Toastr
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))
  .add('white theme toastr default position bottomFull', () => (
    <ThemeProvider theme={darkTheme}>
      <div>
        <p>นอร์ทพุทธภูมิ เด้อเจี๊ยวบัสอันเดอร์ออกแบบ ออดิชั่นโปรดิวเซอร์วาริชศาสตร์พุทธศตวรรษ
        แซมบ้าคาแร็คเตอร์บ๊อกซ์ ศิลปวัฒนธรรมสารขัณฑ์ ติ่มซำ วิป ฮิต โหงวโรแมนติกเฟอร์นิ
        จอร์พาร์นรีแพทย์ ดั๊มพ์เซาท์เป็นไง นายพรานฟาสต์ฟู้ด แมชีนฮันนีมูน มยุราภิรมย์รีไซเคิล
        มาร์เก็ตติ้ง แหม็บแลนด์โฮสเตสฟลุต แคมปัสไทเฮา อันตรกิริยาวาไรตี้เซฟตี้แฟกซ์

        แทกติคบิ๊กเฟิร์มม้านั่งเซอร์วิส หลวงปู่อุเทนคอปเตอร์ สไตล์เด้อด็อกเตอร์โบ้ยบร็อกโคลี
        คาร์โก้เลิฟแหม็บ คีตราชัน เซี้ยว มอลล์เจไดมหาอุปราชาความหมาย ปัจเจกชนแช่แข็ง
        ไลน์เปราะบาง ริคเตอร์ฮ็อต ซูเอี๋ยโลชั่น นิว ก๋ากั่นโปลิศฟีเวอร์ยาวีเฟรม ซี้ภควัมบดี
        เอสเพรสโซซีอีโอโบรกเกอร์ รีดไถ﻿กรรมาชนอีสต์ดีพาร์ทเมนท์เชอร์รี่ รีไทร์ test</p>
        <ToastrContainer show position="bottomFull">
          {
            toastrContent.reverse().map(data => (
              <Toastr
                key={data.title}
                type={data.type}
                title={data.title}
                message={data.message}
              />
            ))
          }
        </ToastrContainer>
      </div>
    </ThemeProvider>
  ))

storiesOf('TimePicker', module)
  .add('default Time picker', () => (
    <TimePicker
      placeholder="Select time or type time in format HH : mm"
    />
  ))
  .add('with currentTime props', () => (
    <TimePicker
      currentTime
    />
  ))
  .add('with use12Hours props', () => (
    <TimePicker
      use12Hours
      placeholder="Select time or type time in format HH : mm"
    />
  ))
  .add('with showSecond props', () => (
    <TimePicker
      showSecond
      placeholder="Select time or type time in format HH : mm : ss"
    />
  ))
  .add('dark theme time picker', () => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ 'background-color': '#303239', padding: '20px', color: '#FFFFFF' }}>
        <TimePicker
          use12Hours
          showSecond
          currentTime
          placeholder="Select time or type time in format HH : mm"
        />
      </div>
    </ThemeProvider>
  ))

storiesOf('Grid', module)
  .add('Grid', () => (
    <Container fluid style={{ height: '300px', lineHeight: '32px' }}>
      <Row debug>
        <Col debug>
          <Link href="https://jsxmachina.github.io/react-grid-system/#responsive-grid" target="_blank">link react-grid-system</Link>
        </Col>
      </Row>
      <Row grow debug>
        <Col debug>
          <Link href="https://jsxmachina.github.io/react-grid-system/#responsive-grid" target="_blank">link react-grid-system</Link>
        </Col>
      </Row>
      <Row debug>
        <Col debug>
          <Link href="https://jsxmachina.github.io/react-grid-system/#responsive-grid" target="_blank">link react-grid-system</Link>
        </Col>
      </Row>
    </Container>
  ))

storiesOf('Link', module)
  .add('link', () => (
    <div>
      <p style={{ 'font-family': 'Prajard' }}>
        ป๊อกพาร์ตุ๊ก
        <Link href="https://jsxmachina.github.io/react-grid-system/#responsive-grid" target="_blank">
          นี่คือลิงก์ที่ใช้ตัวหนา
        </Link>
        ซัพพลายเออร์ เกรย์เกมส์ยนตรกร
      </p>
      <p>
        ป๊อกพาร์ตุ๊ก
        <Link href="https://jsxmachina.github.io/react-grid-system/#responsive-grid" target="_blank">
          นี่คือลิงก์ที่ใช้ตัวหนา
        </Link>
        ซัพพลายเออร์ เกรย์เกมส์ยนตรกร
      </p>
    </div>
  ))