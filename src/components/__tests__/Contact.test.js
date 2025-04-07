import Contact from "../Contact"
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"

test("should load button inside us component", () =>{
    render(<Contact />);

    const button = screen.getByText("button")
    expect(button).toBeInTheDocument();
})