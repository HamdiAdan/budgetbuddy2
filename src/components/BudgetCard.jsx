import { Card, CardBody } from "react-bootstrap"
import { currencyFormatter } from "./Utils"

function BudgetCard({name}){
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    <div>{name}</div>
                    <div>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</div>
                </Card.Title>
            </Card.Body>
        </Card>
    )  
}

export default BudgetCard