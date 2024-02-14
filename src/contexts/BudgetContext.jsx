import React from "react"
import { useContext, useState } from "react"
import {v4 as uuidV4} from 'uuid'

const BudgetContext = React.createContext()


export function useBudget(){
    return useContext(BudgetContext)
}
/*
{
    id:
    name:
    max
}

{
    id:
    budgetId:
    amount:
    description:
}*/

export const BudgetProvider = ({children}) => {
    const [budgets, setBudgets] =useState([])
    const [expenses, setExpenses] =useState([])

    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId === budgetId)
    }


    function addExpense({description, amount,budgetId}){
        setExpenses(prevExpenses =>{
            return [...prevExpenses, {id: uuidV4(), description, amount,budgetId}]
        })
    }


    function addBudget(name,max){
        setBudgets(prevBudgets =>{
            if(prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidV4(), name, max}]
        })
    }

    function deleteBudget({ id }){
        setBudgets(prevBudgets =>{
            return prevBudgets.filter(budget => budget.Id)
        })
    }

    function deleteExpense({ id }){}


    return (<BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>{children}</BudgetContext.Provider>)

}
