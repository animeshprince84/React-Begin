import { render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it('Should render Header Comp. with login button', ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button" , {name:"Login"});

    expect(loginButton).toBeInTheDocument();
})