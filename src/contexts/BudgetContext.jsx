import React from "react"
import { useContext, useState } from "react"
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

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
    const [budgets, setBudgets] =useLocalStorage("budgets",[])
    const [expenses, setExpenses] =useLocalStorage("expenses",[])

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
            return prevBudgets.filter(budget => budget.Id !== id)
        })
    }

    function deleteExpense({ id }){
        //deal with expenses//
        setExpenses(prevExpenses =>{
            return prevExpenses.filter(expenses => expenses.Id !== id)
        })
    }

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
