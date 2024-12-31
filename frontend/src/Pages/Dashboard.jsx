import React, { useState , useEffect} from 'react'
import Navbar from '../Components2/Navbar'
import { Box, Button } from '@chakra-ui/react'
import axios from 'axios';
import { For, Stack, Table } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';


function Dashboard() {

    const [ users , setUsers ] = useState([])

    const navigate = useNavigate()

    const backClick = () =>{
        navigate('/')
    }

    const fetchUsers = async() =>{
        try
        {
            const { data } = await axios.get('http://localhost:5000/api/getusers')
            setUsers(data)
            console.log(data)
        }
        catch(error)
        {
            console.log("Fetching issue !! ", error)
        }
    }

    useEffect(()=>{
        fetchUsers()
    }, [])
  return (
    <>
        <Navbar />
        <Box background="green" width='100%' >
              <img src='/Assets/Frame1.png'></img>
        </Box>
        <Box width='100%' height="800px" backgroundColor='#dcdde1' display='flex' justifyContent='center' alignItems='center'>
            <Box width='80%' height="800px" marginTop='200px'>
            <Stack gap='10px'>
            {users.length > 0 ? (
                    <Table.Root >
                <Table.Header>
              <Table.Row>
                <Table.ColumnHeader><b>Full Name</b></Table.ColumnHeader>
                <Table.ColumnHeader><b>Email</b></Table.ColumnHeader>
                <Table.ColumnHeader ><b>Grduation</b></Table.ColumnHeader>
                <Table.ColumnHeader ><b>Phone</b></Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map((userList) => (
                <Table.Row key={userList.id}>
                  <Table.Cell>{userList.name}</Table.Cell>
                  <Table.Cell>{userList.email}</Table.Cell>
                  <Table.Cell >{userList.graduation}</Table.Cell>
                  <Table.Cell >{userList.phone}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
        </Table.Root>
            )
            :
            (<h4>Loading...!!</h4>)
            }

            </Stack>

            <Button size='lg' backgroundColor={'green'} onClick={backClick}>Back to Home</Button>
            </Box>
        </Box>
    </>
  )
}

export default Dashboard
