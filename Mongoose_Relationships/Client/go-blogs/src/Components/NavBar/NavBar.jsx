import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    useDisclosure
  } from '@chakra-ui/react'


export function NavBar()
{
    
    const modal1 = useDisclosure();
    const modal2 = useDisclosure();
    const [formData,setFormdata]=React.useState({
      name:"",
      email:"",
      avatar:"",
      password:""
    })
    const [signinData,setSigninData]=React.useState({
      signinName:"",
      signinPassword:""
    })
    const handleChange=(e)=>
    {
      let {name,value}=e.target;

      setFormdata({...formData,[name]:value});
    }
    const handlesigninChange=(e)=>
    {
      let {name,value}=e.target;
      setSigninData({...signinData,[name]:value});
    }
    const handleRegister=()=>
    {
      console.log(formData);
      fetch('http://localhost:3001/users',{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{"Content-type":"Application/json"}
      })
    }
    const handlelogin=async()=>
    {
      
      await fetch('http://localhost:3001/users/login',{
        method:"POST",
        body:JSON.stringify(signinData),
        headers:{"Content-Type":"application/json"}
      })
      .then((res)=>res.json())
      .then((res)=>
      {
       console.log(res);
       if(res.token)
       {
        localStorage.setItem("token",res.token);
       }
       
      }
        
      )
    }
    const {name,email,avatar,password}=formData;
    const {signinName,signinPassword}=signinData;
        return(
        <div style={{height:"40px",border:"1px solid black",width:"100%" ,display:"flex",justifyContent:"space-between"}}>
            <h1 style={{margin:"0px"}}>GO BLOGS</h1>
            <div style={{border:"1px solid black"}}>
            <Button onClick={modal1.onOpen}>Login</Button>
            <Modal  isOpen={modal1.isOpen} onClose={modal1.onClose} border="1px solid black" >
              <ModalOverlay />
              <ModalContent width="40%" height="400px" marginTop="50px" textAlign="center" border="1px solid black" position="absolute" right="20px" background="white">
                <ModalHeader display="flex" justifyContent="space-between">
                  <h4>LOGIN</h4> 
                <ModalCloseButton/>
                </ModalHeader>
                
              
                <ModalBody>
                  <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                    name="signinName"
                    type="text"
                    value={signinName}
                    placeholder="Enter your email"
                    onChange={(e)=>handlesigninChange(e)} />
                    <FormLabel>Password</FormLabel>
                    <Input
                    name="signinPassword"
                    type="password"
                    placeholder="Enter your password"
                    value={signinPassword}
                    onChange={(e)=>handlesigninChange(e)} />
                  </FormControl>
                
                </ModalBody>

                <ModalFooter display="flex" justifyContent="center"textAlign="center">
                  <Button onClick={handlelogin} colorScheme='blue' mr={3} >
                    Login
                  </Button>
                  <Button variant='ghost'>Register </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button onClick={modal2.onOpen}>Register</Button>
            <Modal  isOpen={modal2.isOpen} onClose={modal2.onClose} border="1px solid black" >
              <ModalOverlay />
              <ModalContent width="40%" height="400px" marginTop="50px" textAlign="center" border="1px solid black" position="absolute" right="20px">
                <ModalHeader display="flex" justifyContent="space-between">
                  <h4>Create Account</h4> 
                <ModalCloseButton/>
                </ModalHeader>
                <ModalBody>
                  <FormControl>
                    <FormLabel>
                      Name
                    </FormLabel>
                    <Input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Enter your Name"
                    />
                    <FormLabel>Email Address</FormLabel>
                    <Input
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e)=>handleChange(e)} />
                    <FormLabel>Profile Pic</FormLabel>
                    <Input
                    name="avatar"
                    type="text"
                    value={avatar}
                    onChange={(e)=>handleChange(e)} />
                    <FormLabel>Password</FormLabel>
                    <Input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e)=>handleChange(e)} />
                  </FormControl>
                
                </ModalBody>

                <ModalFooter display="flex" justifyContent="center"textAlign="center">
                  <Button onClick={handleRegister} colorScheme='blue' mr={3} >
                    Register
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </div>
            
        </div>
    )
}