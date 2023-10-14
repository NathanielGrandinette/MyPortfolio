import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import NavBar from '../NavBar'
import { BrowserRouter } from "react-router-dom"

const RenderNavbar = () => {
    return (
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    )
}

describe("Navbar", () => {
    beforeEach(() => {
        render(<RenderNavbar />)
    })
    it("Should render name", () => {
        const nameElement = screen.getByText("Nathaniel Grandinette")
        expect(nameElement).toBeInTheDocument()
    })

    it("Should render title", () => {
        const titleElement = screen.getByText("Software Developer")
        expect(titleElement).toBeInTheDocument()
    })

    it("Should render projects link", () => {
        const linkElement = screen.getByRole("link", { name: "Projects" })
        expect(linkElement).toBeInTheDocument()
    })

    it("Should render about me link", () => {
        const linkElement = screen.getByRole("link", { name: "About Me" })
        expect(linkElement).toBeInTheDocument()
    })

    it("Should render contact me link", () => {
        const linkElement = screen.getByRole("link", { name: "Contact Me" })
        expect(linkElement).toBeInTheDocument()
    })

    it("Should render light/dark mode button", () => {
        const buttonElement = screen.getByTestId("tone-toggle")
        expect(buttonElement).toBeInTheDocument()
    })
})