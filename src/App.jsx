import { useState } from 'react'
import './App.css'
import { Button,Stack } from 'react-bootstrap'
import Container  from 'react-bootstrap/Container'


function App() {
  return <Container className='my-4'>
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className='me-auto'>Budget</h1>
      <Button variant='primary'>Add Budget</Button>
      <Button variant='outline-primary'>Add Expense</Button>

    </Stack>
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1rem", alignItems:'flex-start'}}>
      <BudegetCard></BudegetCard>
    </div>
  </Container>
  
}

export default App
