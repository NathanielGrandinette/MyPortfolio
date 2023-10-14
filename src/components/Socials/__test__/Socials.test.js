import Socials from "../Socials"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe("Home page follow me section", () => {
    beforeEach(() => {
        render(<Socials />)
    })

    it("Should render follow me header", () => {
        const followHeader = screen.getByText("Follow Me")
        expect(followHeader).toBeInTheDocument()
    })

    it("Should render github button", () => {
        const githubButton = screen.getByTestId("github")
        expect(githubButton).toHaveAttribute("href", "https://github.com/NathanielGrandinette")
    })

    it("Should render linkedIn button", () => {
        const linkedinButton = screen.getByTestId("linkedin")
        expect(linkedinButton).toHaveAttribute("href", "https://linkedin.com/in/nathaniel-grandinette")
    })
})