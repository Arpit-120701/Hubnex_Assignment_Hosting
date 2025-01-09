import React, { useState } from 'react'
import Navbar from '../Components2/Navbar'
import { Button, Fieldset, Input, Stack , Box} from '@chakra-ui/react'
import { Field } from '../components/ui/field';
import { toast } from 'react-toastify';
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [ phone , setPhone ] = useState()
    const [password, setPassword] = useState()
    const [ graduation , setGraduation ] = useState()

    const navigate = useNavigate();

    const submitHandler = async(e) => {
        e.preventDefault()
        if(!name || !email)
        {
            toast.warning('Enter all the fields !!')
        }
        try
        {
            const formData = {
                name  , email ,password,  graduation , phone
            }
            const config = {
                headers:{
                  "Content-type":"application/json",
                },
              };
            
            //const { data } = await axios.post("https://hubnex-assignment-hosting-server.vercel.app/api/adduser",{name , email , password , graduation , phone}, config ,{ withCredentials : true } );

            const response = await fetch(
                "https://hubnex-assignment-hosting-server.vercel.app/api/adduser",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                }
              );
              const data = await response.json();
              console.log(data);
            //localStorage.setItem("userdetails", JSON.stringify(data))
            toast.success('Successfully Registered !!')
            //navigate('/dashboard')

        }
        catch(error)
        {
            console.log("error ")
            toast.error('Something Wrong !')
        }

    }
    return (
        <>
            <Navbar />
            <ToastContainer />
            <Box display='flex' justifyContent="space-evenly" alignItems={'center'} width='100%'>
                <Box ><img src='/Assets/poster.jpg' ></img></Box>
                <Box>
                    <Fieldset.Root size="lg" maxW="md">
                        <Stack>
                            <Fieldset.Legend>Contact details</Fieldset.Legend>
                            <Fieldset.HelperText>
                                Please provide your contact details below.
                            </Fieldset.HelperText>
                        </Stack>

                        <Fieldset.Content >
                            <Field label="Name" id='name'>
                                <Input name="name" onChange={((e)=> setName(e.target.value))} />
                            </Field>

                            <Field label="Email address" id='email'>
                                <Input name="email" type="email"  onChange={((e)=> setEmail(e.target.value))} />
                            </Field>

                            <Field label="Password" id='password'>
                                <Input name="Password" type="Password"  onChange={((e)=> setPassword(e.target.value))} />
                            </Field>

                            <Field label="Graduation" id='graduation'>
                                <Input name="graduation" type="graduation"  onChange={((e)=> setGraduation(e.target.value))} />
                            </Field>

                            <Field label="Phone" id='phone'>
                                <Input name="phone" type="phone"  onChange={((e)=> setPhone(e.target.value))} />
                            </Field>
                            <Button size='lg' backgroundColor={'green'} onClick={submitHandler} >Submit !!</Button>
                        </Fieldset.Content>

                        
                    
                </Fieldset.Root>

                    </Box>
                </Box>
                <Box marginTop='50px' width='100%' display='flex' justifyContent='center' alignItems='center' >
                    <img src='/Assets/Frame16.jpg' ></img>
                </Box>
            </>
            )
}

            export default Signup
