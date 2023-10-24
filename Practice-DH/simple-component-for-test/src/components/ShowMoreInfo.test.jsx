import { beforeEach, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react"
import { ShowMoreInfo } from "./ShowMoreInfo";


describe('ShowMoreInfo', () => {

    beforeEach(()=>{
        render(<ShowMoreInfo title="Show more Information">
            <p>More information, more power</p>
        </ShowMoreInfo>);
    })

    test('show the component', () => {
        expect(screen.getByText("Show more Information")).toBeDefined()
    });

    test('should not show paragraph all the time', ()=>{
        expect(screen.queryByText(/more power/i)).toBeNull()
    })

    /*This form getByRole its the most recomendated */
    test('Btn is present in the DOM', ()=>{
            //const btn = screen.getByRole("button", {name: "See more..."})
            const btn = screen.getByRole("button");
            expect(btn.textContent).toBe("See more...")
    })

    test('should show the paragraph when the button is clicked', ()=>{
        const button = screen.getByText(/See more.../i);
        fireEvent.click(button);
        expect(screen.queryByText(/more power/i)).toBeDefined();
    })

    test('should hidde the paragraph when the button is clicked two times', ()=>{
        const button = screen.getByText(/See more.../i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/more power/i)).toBeNull();
    })

})
