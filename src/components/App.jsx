import { useState } from 'react'
import { Button,Stack } from 'react-bootstrap'
import Container  from 'react-bootstrap/Container'
import BudgetCard from './BudgetCard'
import AddBugetModal from './AddBudgetModal'
import { useBudget } from '../contexts/BudgetContext'


function App() {
  const [showAddBudgetModal,setShowAddBudgetModal]= useState(false)
  const {budgets, getBudgetExpenses} = useBudget()
 

return <>
  <Container className='my-4'>
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className='me-auto'>Budgets</h1>
      <Button variant='primary'onClick={()=>setShowAddBudgetModal(true)}>Add Budget</Button>
      <Button variant='outline-primary'>Add Expense</Button>
      <Button variant='primary'>Dark</Button>


    </Stack>
    <div 
      style={{
        display:"grid", 
        gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", 
        gap:"1rem",
        alignItems:'flex-start'
      }}
    >

      {budgets.map(budget => {
         const amount = getBudgetExpenses(budgets.id).reduce(
          (total, expense) =>total+expense.amount,
          0
      ) 
        return(
          <BudgetCard 
           key={budgets.id}
           name={budgets.name}
           amount ={amount} 
           max={budgets.max}
          />
        )
 

      })}
     
    </div>
  </Container>
  <AddBugetModal show = {showAddBudgetModal} handleClose={()=> setShowAddBudgetModal(false)}/>
</>  
  
  
}

export default App
