import { render, screen } from '@testing-library/react'
import About from '../pages/about/about'
import { BrowserRouter } from 'react-router-dom'

const MockRouter = () => {
    return (
        <BrowserRouter>
            <About />
        </BrowserRouter>
    )
}

const renderPage = () => {
    return (
        render(<MockRouter />)
    )
}

describe("About me Intro", () => {
    beforeEach(() => {
        renderPage()
    })
    it("Should render about me photo", async () => {
        const imageElement = screen.getByAltText("profile picture")
        expect(imageElement).toBeInTheDocument()
    })

    it("Should render about me header", async () => {
        const headerElement = screen.getByTestId("about-header")
        expect(headerElement).toBeInTheDocument()
    })

    it("Should render about me paragraph", async () => {
        const aboutElement = screen.getByTestId("about-me-paragraph")
        expect(aboutElement).toBeInTheDocument()
    })
})

describe("About me technologies", () => {
    beforeEach(() => {
        renderPage()
    })

    it("Should render technologies header", () => {
        const technologiesHeader = screen.getByText("Some of the technologies I have experience with")
        expect(technologiesHeader).toBeInTheDocument()
    })

    it("Should render 6 technologies images", () => {
        const techImgs = screen.getAllByTestId("tech-imgs")
        expect(techImgs.length).toBe(6)
    })
})

describe("About me page follow me section", () => {
    beforeEach(() => {
        renderPage()
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