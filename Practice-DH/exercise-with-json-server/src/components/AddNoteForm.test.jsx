import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react"
import { AddNoteForm } from './AddNoteForm'
import { expect, test, vi } from 'vitest'

test('<NoteForm/> updates parent state and calls onSubmit', () => {
    const createNote = vi.fn()

    const component = render(
        <AddNoteForm createNote={ createNote }/>
    )

    const input = component.container.querySelector('input')

    const form = component.container.querySelector('form')

    fireEvent.change(input, {
        target: {value: 'testing of forms cold be easier'}
    })

    fireEvent.submit(form)

    expect(createNote.mock.calls).toHaveLength(1)

    expect(createNote.mock.calls[0][0].content).toBe('testing of forms cold be easier')
})