import { render, screen } from '@testing-library/react'
import Home from '../pages/home/home'
import { BrowserRouter } from 'react-router-dom'

const MockRouter = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

const renderLanding = () => {
    return (
        render(<MockRouter />)
    )
}

describe("Home Page Intro", () => {
    beforeEach(() => {
        renderLanding()
    })
    it("Should render intro photo", async () => {
        const imageElement = screen.getByAltText("developer")
        expect(imageElement).toBeInTheDocument()
    })

    it("Should render download resume button", async () => {
        const buttonElement = screen.getByTestId("download-resume")
        expect(buttonElement).toBeInTheDocument()
    })

    it("Should render introduction sentence", async () => {
        const landingElement = screen.getByTestId("intro-sentence")
        expect(landingElement).toBeInTheDocument()
    })
})

describe('Home page projects', () => {
    beforeEach(() => {
        render(<MockRouter />)
    })

    it("Should render Projects title", () => {
        const projectsHeader = screen.getByText("Projects")
        expect(projectsHeader).toBeInTheDocument()
    })

    it("Should render more projects button", () => {
        const moreProjectsBtn = screen.getByText("More Projects")
        expect(moreProjectsBtn).toBeInTheDocument()
    })
}) 

describe("Home page follow me section", () => {
    beforeEach(() => {
        renderLanding()
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