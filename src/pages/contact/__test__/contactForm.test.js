import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "../contactForm";

const renderPage = () => {
  return render(<ContactForm />);
};

describe("Contact Form", () => {
  beforeEach(() => {
    renderPage();
  });

  describe("Header", () => {
    it("Should display a contact me header", () => {
      const heading1Element = screen.getByText("Contact");
      const heading2Element = screen.getByText("Me");
      expect(heading1Element && heading2Element).toBeInTheDocument();
    });
  });

  describe("Input labels", () => {
    it("Should display full name label", () => {
      const labelElement = screen.getByText("Full Name");
      expect(labelElement).toBeInTheDocument();
    });

    it("Should display email label", () => {
      const labelElement = screen.getByText("Email");
      expect(labelElement).toBeInTheDocument();
    });

    it("Should display subject label", () => {
      const labelElement = screen.getByText("Subject");
      expect(labelElement).toBeInTheDocument();
    });

    it("Should display your message label", () => {
      const labelElement = screen.getByText("Your Message");
      expect(labelElement).toBeInTheDocument();
    });
  });

  describe("Renders inputs", () => {
    it("Should display the name field", () => {
      const inputElement = screen.getByPlaceholderText("Your name");
      expect(inputElement).toBeInTheDocument();
    });

    it("Should display the email field", () => {
      const inputElement = screen.getByPlaceholderText("Your email");
      expect(inputElement).toBeInTheDocument();
    });

    it("Should display the subject field", () => {
      const inputElement = screen.getByPlaceholderText("Subject");
      expect(inputElement).toBeInTheDocument();
    });

    it("Should display the message field", () => {
      const textElement = screen.getByPlaceholderText("Message");
      expect(textElement).toBeInTheDocument();
    });

    it("Should display send message button", () => {
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toBeInTheDocument();
    });
  });

  describe("Input events", () => {
    it("Should allow input into the name field", () => {
      const inputElement = screen.getByPlaceholderText("Your name");
      fireEvent.change(inputElement, { target: { value: "Nathan" } });
      expect(inputElement.value).toBe("Nathan");
    });

    it("Should allow input into the email field", () => {
      const inputElement = screen.getByPlaceholderText("Your email");
      fireEvent.change(inputElement, { target: { value: "test@gmail.com" } });
      expect(inputElement.value).toBe("test@gmail.com");
    });

    it("Should allow input into the subject field", () => {
      const inputElement = screen.getByPlaceholderText("Subject");
      fireEvent.change(inputElement, { target: { value: "This is a test" } });
      expect(inputElement.value).toBe("This is a test");
    });

    it("Should allow input into the name field", () => {
      const inputElement = screen.getByPlaceholderText("Message");
      fireEvent.change(inputElement, {
        target: { value: "Thank you for testing" },
      });
      expect(inputElement.value).toBe("Thank you for testing");
    });
  });
});
