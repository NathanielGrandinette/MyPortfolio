import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../home'
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
        const buttonElement = screen.getByText("Download Resume")
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