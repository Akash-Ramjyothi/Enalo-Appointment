import React, { useEffect, useState } from "react";
import "./App.css";
import { Typography } from "antd";
import { Input, Form, Select, Button } from "antd";
import { FormInstance } from "antd";
import DesktopForm from "./components/DesktopForm/DesktopForm";
import MobileForm from "./components/MobileForm/MobileForm";
const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

interface FormValues {
  fullName: string;
  email: string;
  dropdown1: string;
  dropdown2: string;
  message: string;
}

// const App: React.FC =()=>{
//   const formRef = React.createRef<FormInstance>();
// }

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth<329);
  
  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth<329);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formRef = React.createRef<FormInstance>();
  
  return isMobile ? <MobileForm /> : <DesktopForm />
}

export default App;
