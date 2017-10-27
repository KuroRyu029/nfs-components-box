
import { injectGlobal } from 'styled-components'
import Button from './components/button/button'
import Card from './components/card/card'
import Dropdown from './components/dropdown/dropdown-selection'
import { Checkbox, Input, InputFile, InputSelect, MultipleFile, Radiobox } from './components/input'
import Layout, { Burger, Content, Footer, Header, Menu, Sider } from './components/layout'
import { Modal, ModalContent, ModalFooter } from './components/modal'
import Progress from './components/progress/progress'
import { Sidebar, SidebarHeader, SidebarFooter, Icon, MenuItem } from './components/sidebar/sidebar'
import Tab, { TabContent } from './components/tab/tab'
import Table from './components/table/table'
import TimePicker from './../src/components/timepicker/time-input'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender, ClearFix } from './../src/components/grid/grid'
import { Toastr, ToastrContainer } from './components/toastr'
import TextLink from './../src/components/link/link'

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

export {
  Button,
  Card,
  Dropdown,
  Checkbox,
  Input,
  InputFile,
  InputSelect,
  MultipleFile,
  Radiobox,
  Layout,
  Burger,
  Content,
  Footer,
  Header,
  Menu,
  Sider,
  Modal,
  ModalContent,
  ModalFooter,
  Progress,
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  Icon,
  MenuItem,
  Tab,
  TabContent,
  Table,
  Toastr,
  ToastrContainer,
  TimePicker,
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender,
  ClearFix,
  TextLink,
}
